import type { Adapter, AdapterAccount, AdapterSession, AdapterUser } from "@auth/core/adapters"
import type { Prisma, PrismaClient } from "@prisma/client"

export function PrismaAdapter(prisma: PrismaClient | ReturnType<PrismaClient["$extends"]>): Adapter {
	const p = prisma as PrismaClient
	return {
		createUser: ({ id: _id, ...data }) => {
			return p.user.create({ data })
		},
		getUser: id => p.user.findUnique({ where: { id } }),
		getUserByEmail: email => p.user.findUnique({ where: { email } }),
		async getUserByAccount(provider_providerAccountId) {
			const account = await p.account.findUnique({
				where: { provider_providerAccountId },
				select: { user: true },
			})
			return (account?.user as AdapterUser) ?? null
		},
		updateUser: ({ id, ...data }) => p.user.update({ where: { id }, data }) as Promise<AdapterUser>,
		deleteUser: id => p.user.delete({ where: { id } }) as Promise<AdapterUser>,
		linkAccount: data => p.account.create({ data }) as unknown as AdapterAccount,
		unlinkAccount: provider_providerAccountId =>
			p.account.delete({
				where: { provider_providerAccountId },
			}) as unknown as AdapterAccount,
		async getSessionAndUser(sessionToken) {
			const userAndSession = await p.session.findUnique({
				where: { sessionToken },
				include: { user: true },
			})
			if (!userAndSession) return null
			const { user, ...session } = userAndSession
			return { user, session } as { user: AdapterUser; session: AdapterSession }
		},
		createSession: data => p.session.create({ data }),
		updateSession: data => p.session.update({ where: { sessionToken: data.sessionToken }, data }),
		deleteSession: sessionToken => p.session.delete({ where: { sessionToken } }),
		async createVerificationToken(data) {
			const verificationToken = await p.verificationToken.create({ data })
			if (verificationToken.id) verificationToken.id = undefined
			return verificationToken
		},
		async useVerificationToken(identifier_token) {
			try {
				const verificationToken = await p.verificationToken.delete({
					where: { identifier_token },
				})
				if (verificationToken.id) verificationToken.id = undefined
				return verificationToken
			} catch (error) {
				if ((error as Prisma.PrismaClientKnownRequestError).code === "P2025") return null
				throw error
			}
		},
		async getAccount(providerAccountId, provider) {
			return p.account.findFirst({
				where: { providerAccountId, provider },
			}) as Promise<AdapterAccount | null>
		},
		async createAuthenticator(authenticator) {
			return p.authenticator.create({
				data: authenticator,
			})
		},
		async getAuthenticator(credentialID) {
			return p.authenticator.findUnique({
				where: { credentialID },
			})
		},
		async listAuthenticatorsByUserId(userId) {
			return p.authenticator.findMany({
				where: { userId },
			})
		},
		async updateAuthenticatorCounter(credentialID, counter) {
			return p.authenticator.update({
				where: { credentialID },
				data: { counter },
			})
		},
	}
}

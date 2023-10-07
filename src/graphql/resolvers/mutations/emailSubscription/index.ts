import { type Context } from "~/graphql/context"
import {
  EmailSubscriptionType,
  type MutationEditEmailSubscriptionArgs,
} from "~/graphql/typeSlut"
import { emailRX } from "~/lib/functions"
import { GraphQLError } from "graphql"

export async function editEmailSubscription(
  _,
  args: MutationEditEmailSubscriptionArgs,
  ctx: Context
) {
  const { data } = args
  const { subscribed, type, email } = data
  const { prisma, viewer } = ctx

  if (!viewer?.email && !email) {
    throw new GraphQLError("No email")
  }

  if (email && !emailRX(email)) {
    throw new GraphQLError("Invalid email")
  }

  const emailToUse = viewer && viewer.email ? viewer.email : email
  if (type === EmailSubscriptionType.HackerNews) {
    if (subscribed) {
      try {
        await prisma.emailSubscription.create({
          data: {
            email: emailToUse,
            type: EmailSubscriptionType.HackerNews,
          },
        })
      } catch (err) {
        console.error({ err })
        // nothing to do here
      }
    } else {
      try {
        await prisma.emailSubscription.delete({
          where: {
            emailAndType: {
              email: emailToUse,
              type: EmailSubscriptionType.HackerNews,
            },
          },
        })
      } catch (err) {
        console.error({ err })
        // nothing to do here
      }
    }
  }

  // if (type === EmailSubscriptionType.Newsletter) {
  //   if (subscribed) {
  //     revue.addSubscriber({ email: emailToUse, doubleOptIn: !viewer })
  //   } else {
  //     revue.removeSubscriber({ email: emailToUse, doubleOptIn: !viewer })
  //   }
  // }

  return viewer
    ? await prisma.user.findUnique({ where: { id: viewer.id } })
    : null
}

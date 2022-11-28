import { GraphQLError } from 'graphql'
import jwt from 'jsonwebtoken'

import { baseEmail } from '~/config/seo'
import { CLIENT_URL } from '~/graphql/constants'
import { IS_PROD } from '~/graphql/constants'
import { Context } from '~/graphql/context'
import { MutationEditUserArgs } from '~/graphql/types.generated'
//import { deleteUser as deleteUserFromAuth0 } from '~/lib/auth0/deleteUser'
//import { client as postmark } from '~/lib/postmark'
import { validEmail, validUsername } from '~/lib/validators'

export async function deleteUser(_, __, ctx: Context) {
  const { prisma, viewer } = ctx

  if (viewer.isAdmin) {
    throw new GraphQLError('Admins can’t be deleted')
  }

  const user = await prisma.user.findUnique({ where: { id: viewer.id } })

  return await prisma.user
    .delete({
      where: { id: viewer.id },
    })
    .then(() => true)
}

export async function editUser(_, args: MutationEditUserArgs, ctx: Context) {
  const { prisma, viewer } = ctx
  const { data } = args
  const { name, email } = data

  if (name) {
    if (!validUsername(name)) {
      throw new GraphQLError('Usernames can be 16 characters long')
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (user && user.id !== viewer.id) {
      throw new GraphQLError('That name is taken')
    }

    return await prisma.user.update({
      where: { id: viewer.id },
      data: { name },
    })
  }

  if (email) {
    if (!validEmail(email)) {
      throw new GraphQLError('That email is not valid')
    }

    const userByEmail = await prisma.user.findUnique({
      where: { email },
    })

    if (userByEmail && userByEmail.id !== viewer.id) {
      throw new GraphQLError('That email is taken')
    }

    // the user is updating their email to be the same thing
    if (userByEmail && userByEmail.id === viewer.id) {
      if (userByEmail.email === email) {
        return userByEmail
      }
    }

    const token = jwt.sign(
      { userId: viewer.id, email },
      process.env.JWT_SIGNING_KEY
    )

    const url = `${CLIENT_URL}/api/email/confirm?token=${token}`

    if (IS_PROD) {
      console.log('Sending confirmation email', {
        From: baseEmail,
        To: email,
        TemplateId: 25539089,
        TemplateModel: { url },
      })
    }

    return await prisma.user.update({
      where: { id: viewer.id },
      data: { email },
    })
  }

  // if no email or name were passed, the user is trying to cancel the pending email request
  return await prisma.user.update({
    where: { id: viewer.id },
    data: {},
  })
}

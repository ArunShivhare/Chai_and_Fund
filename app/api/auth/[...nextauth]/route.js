import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/models/user'
import Payment from '@/models/payment'
import connectDB from '@/db/connectDB'

export const authoptions = NextAuth({
    providers: [
        // OAuth authentication providers...

        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET
        // }),
        // Passwordless / email sign in
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github") {
                await connectDB()
                //check if user exist in database
                const cuurentuser = await User.findOne({ email: email })
                if (!cuurentuser) {
                    //create a new user
                    const newuser = await User.create({
                        email: user.email,
                        username: user.email.split("@")[0],
                    })
                    user.name = newuser.username
                }
                else {
                    user.name = cuurentuser.username
                }
                return true
            }
        },
        async session({ session, user, token }) {
            const dbUser = await User.find({ email: session.user.email })
            session.user.name = dbUser.username
            return session
        },
    }
})

export { authoptions as GET, authoptions as POST }
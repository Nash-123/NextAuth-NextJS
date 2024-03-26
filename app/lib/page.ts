import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [ 
        CredentialsProvider({
            name: "Email",
            credentials: {
              username: { label: 'Username', type: 'text', placeholder: 'Email' },
              password: { label: 'password', type: 'password', placeholder: 'Password'},
            },
            async authorize(credentials: any) {
                console.log(credentials)
                // const username = credentials.username;
                // const password = credentials.password;
                // const user = prisma.user.findOne({
                //     where: { 
                //         email: username,
                //         password: password
                //     }
                // })

                // if(!user){
                //     return null
                // }
                // return {
                //     // id: user.id,
                //     // email: user.email
                //     id: "user1",
                //     name: "Nishan Acharya"
                // }
                return {
                    id: "user1",
                    name: "Nishan Acharya",
                    email: "Nishan29@gmail.com"
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        })

    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn: ({user}) => {

            if(user.email == "Todoo@gmail.com"){
                return false
            }
            return true
        },
        jwt: ({token,user}) => {
            console.log(token);
            console.log(user);
            // token.userId = "asfqafafaf"
            // token.type= "admin"
            token.userId = token.sub;
            return token;

        },
        session: ({session,token,user}: any) => {
            console.log(session);
            if(session && session.user){
                session.user.id = token.userId;
            }
            return session;
        }

    },
    pages: {
        signIn: "/signIn" // Not anymore the coustom SignIn page
    }
}
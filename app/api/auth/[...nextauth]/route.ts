import { NEXT_AUTH } from "@/app/lib/page";
import NextAuth from "next-auth";
// import CredentialProvider from 'next-auth/providers/credentials';

const handler = NextAuth(NEXT_AUTH);

//  export const GET = handler ;
//  export const POST = handler;

export {handler as GET , handler as POST}















// output 
// {
//     csrfToken: '40037318d141b8ed665afa31e7a883f79b283a89cdf241bae3b9d2e118b38474',
//     username: '',
//     password: ''
//   }
//   {
//     name: 'Nishan Acharya',
//     email: 'Nishan29@gmail.com',
//     picture: undefined,
//     sub: 'user1'
//   }
//   { id: 'user1', name: 'Nishan Acharya', email: 'Nishan29@gmail.com' }
//   {
//     name: 'Nishan Acharya',
//     email: 'Nishan29@gmail.com',
//     sub: 'user1',
//     iat: 1711478757,
//     exp: 1714070757,
//     jti: '6b02119b-6778-4302-89f7-515ead640c67'
//   }
//   undefined
//   {
//     name: 'Nishan Acharya',
//     email: 'Nishan29@gmail.com',
//     sub: 'user1',
//     iat: 1711478757,
//     exp: 1714070757,
//     jti: '6b02119b-6778-4302-89f7-515ead640c67'
//   }





// SignInLogout{"data":{"user":{"name":"Nishan Acharya","email":"Nishan29@gmail.com","id":"user1"},"expires":"2024-04-25T18:53:54.688Z"},"status":"authenticated"}
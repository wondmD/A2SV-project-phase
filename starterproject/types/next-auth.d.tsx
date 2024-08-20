import NextAuth from "next-auth";


declare module "next-auth" {
    interface Session {
        user : {
            data : {
                "id": number,
                "accessToken": string,
                "refreshToken": string,
                "name": string,
                "email": string,
                "profilePicUrl": string,
                "role": string,
                "profileComplete": boolean,
                "profileStatus":string
            } 
        }
    }
}
"use client"
import { useRouter } from "next/navigation";
import {signIn,signOut} from "next-auth/react";
import { useSession } from "next-auth/react"; // use session use in CLient component


export const AppBar =() => {
    const router = useRouter();
    const session = useSession();
    return (<div>
        {/* <button onClick={() => {
            router.push("/api/auth/signin");
        }}>Signin</button> */}
        <button onClick= {() => {
            signIn();
        }}>SignIn</button>
        <button onClick = {() => {
            signOut();
        }}>Logout</button>
        {JSON.stringify(session)}
        
    </div>)
}
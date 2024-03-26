"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";



export default function() {
    const router = useRouter();
    
    return <div>
        <button onClick = {async() => {
                await signIn("google");
        }}>Login with Google</button>
        <br/>
        <button onClick= {async() => {
            await signIn("Github")
        }}>Login with Github</button>
        <br/>
        <button onClick = { async () => {
            const res = await signIn("Credentials", {username: "",
        password: "",
    redirect: false,});
    console.log(res);
    router.push("/");
        }}>Login with Email</button>
    </div>
}
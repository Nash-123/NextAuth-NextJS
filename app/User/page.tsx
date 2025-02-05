import { AppBar } from "@/components/AppBar";
import { getServerSession  } from "next-auth";
import { NEXT_AUTH } from "../lib/page";

export default async function(){
    const session = await getServerSession(NEXT_AUTH);
    return <div>
        <AppBar/>
        User Component
        {JSON.stringify(session)}
    </div>
}
// use session use in a server component 

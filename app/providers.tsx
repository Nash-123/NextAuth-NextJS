// Some client side providers like SessionProvider , Theme Provider, RecoilRoot
"use client"
import { SessionProvider} from "next-auth/react";

export function Providers(  {children} : {
    children: React.ReactNode
}){ 
    return <SessionProvider>
        {children}
    </SessionProvider>
}


// Used in layout.tsx

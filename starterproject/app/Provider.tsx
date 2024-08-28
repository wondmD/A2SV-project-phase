"use client"
import { SessionProvider } from "next-auth/react";
import React, {ReactNode} from "react";
import StoreProvider from "./StoreProvider";

interface Props {
    children :ReactNode
}

function Provider({children} : Props) {
    return (
        <SessionProvider>
            <StoreProvider >
            {children}
            </StoreProvider>
        </SessionProvider>
    );
}

export default Provider;
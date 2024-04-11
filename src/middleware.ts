import { NextResponse } from "next/server";
import { auth } from "./auth";


export default auth((req) => {
    const isLoggedin = !!req.auth;

    if(req.nextUrl.pathname === "/admin" && !isLoggedin ) {
        return NextResponse.redirect(new URL('/', req.url));
    }
})

export const config = {
    matcher: ["/admin"]
}
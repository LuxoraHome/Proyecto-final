
import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { NextURL } from "next/dist/server/web/next-url"



export const middleware = (request: NextRequest) => {

    const { pathname, origin } = request.nextUrl

    if ((pathname === "/cart" || pathname === "/dashboard" || pathname === "/orders") && !request.cookies.get("access_uid")) {
        const newUrl = new NextURL("/login", origin)
        return NextResponse.redirect(newUrl);
    }
    else {
        return NextResponse.next()
    }

}








export default middleware;
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { decrypt } from '@/app/lib/session';

const protectedRoutes = ['/check-text'];
const publicRoutes = ['/login'];
export default async function middleware(req) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = (await cookies()).get('session')?.value;
    const session = await decrypt(cookie);

    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (isPublicRoute && session?.userId) {
        return NextResponse.redirect(new URL('/check-text', req.nextUrl));
    }

    return NextResponse.next();
};

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

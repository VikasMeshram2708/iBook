import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/pages/dashboard';
  const cookieStore = request.cookies.get('next-auth.session-token')?.value || '';

  if (isPublicPath && cookieStore) {
    return NextResponse.rewrite(new URL('/pages/dashboard', request.url));
  }
  if (isPublicPath && !cookieStore) {
    return NextResponse.redirect(new URL('/pages/contact', request.url));
  }
  if (!isPublicPath && !cookieStore) {
    return NextResponse.rewrite(new URL('/', request.url));
  }
  return NextResponse.rewrite(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/pages/dashboard',
};

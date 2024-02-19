import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPubliPath = path === '/' || path === '/home';

  const cookieStore =
    request.cookies.get('next-auth.session-token')?.value || '';

  if (isPubliPath && cookieStore) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPubliPath && !cookieStore) {
    return NextResponse.redirect(new URL('/pages/contact', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/pages/dashboard'],
};

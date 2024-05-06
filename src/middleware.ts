import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest): Promise<NextResponse> {
  if (req.nextUrl.pathname === req.nextUrl.pathname.toLocaleLowerCase()) return NextResponse.next();

  return NextResponse.redirect(new URL(req.nextUrl.origin + req.nextUrl.pathname.toLowerCase()));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};

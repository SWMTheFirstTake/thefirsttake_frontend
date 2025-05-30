import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Team30',
  description: 'Software Maestro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen max-w-[480px] mx-auto`}>
        <div className="flex justify-center items-center h-full">
          {/* <SessionProvider session={session} refetchInterval={5 * 60}> */}
          {children}
          {/* </SessionProvider> */}
        </div>
      </body>
    </html>
  );
}

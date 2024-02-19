import type { Metadata } from 'next';
import './globals.css';
import AuthProvider from '@/utils/AuthProvider';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'iBook',
  description:
    'Organize and share your vital lecture notes effortlessly with iBook, the go-to destination for students.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <body className="">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

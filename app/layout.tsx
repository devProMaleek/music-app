import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next';
import './globals.css';
import { Figtree } from 'next/font/google';


import ToasterProvider from '@/providers/ToasterProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';


const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Music App',
  description: 'A spotify clone created by Abdulmalik Adebayo (devProMaleek)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

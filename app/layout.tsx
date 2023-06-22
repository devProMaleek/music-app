import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next'
import './globals.css';
import { Figtree } from 'next/font/google';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Music App',
  description: 'A spotify clone created by Abdulmalik Adebayo (devProMaleek)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}

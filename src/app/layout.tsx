import './globals.css';
import type { Metadata } from 'next';

import { Navbar } from '@/components/index';

export const metadata: Metadata = {
  title: 'Cruz Interactive 3D Portfolio',
  description:
    "Immerse yourself in Cruz's dynamic portfolio. Skillfully crafted using Three.js and React.js to showcase my work in a unique, interactive 3D environment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative z-0 bg-primary">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

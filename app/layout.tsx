import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NoCSS - Make any page look like it has no CSS',
  description:
    'Drop-in stylesheet that makes any webpage revert to browser default appearance',
  keywords: [
    'css',
    'reset',
    'stylesheet',
    'user-agent',
    'browser-default',
    'no-css',
  ],
  authors: [{ name: 'm4rcel-lol' }],
  openGraph: {
    title: 'NoCSS - Drop-in stylesheet',
    description:
      'Make any page look like it has no CSS — drop-in stylesheet',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

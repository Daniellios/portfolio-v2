import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { i18n } from '../../../i18n.config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const inter = Inter({ subsets: ['latin'] });
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  adjustFontFallback: 'sans-serif',
});

export const metadata = {
  title: 'Portfolio | Daniil Blinnikov',
  description: 'Front-end developer portfolio',
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body
        className={cn(
          '!overflow-x-hidden scrollbar bg-black',
          space_grotesk.className
        )}>
        {children}
      </body>
    </html>
  );
}

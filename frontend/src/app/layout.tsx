import { Aboreto } from 'next/font/google';
import './styles/globals.css';

const aboreto = Aboreto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-aboreto',
});

export const metadata = {
  title: 'Querencia de Sevilla',
  description: 'Luxury Hotel in the heart of Seville',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=ZCOOL+Kuaile&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={aboreto.variable}>
        {children}
      </body>
    </html>
  );
}

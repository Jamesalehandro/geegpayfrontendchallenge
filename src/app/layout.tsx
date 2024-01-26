import { Provider } from 'components/shared/Provider';
import type { Metadata } from 'next';
import { plusJakarta } from 'styles/fonts';
import { DashboardLayout } from 'layout/DashboardLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Geegpay frontend challenge',
  description:
    'This is a design done for the frontend design challenge sponsored by Geegpay and DaveyHert ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body className={plusJakarta.className}>
        <div id='portal' />

        <Provider>
          <DashboardLayout>{children}</DashboardLayout>
        </Provider>
      </body>
    </html>
  );
}

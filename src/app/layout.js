import { Poppins } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: "KerjaYuk!",
  description: "Manage your work in hand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <main className="main-layout relative max-w-[500px] m-auto min-h-screen pb-[100px] bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}

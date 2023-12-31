import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pokemon finder App",
    description: "Help in finding Pokemon",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ThemeProvider attribute='class' defaultTheme='dark'>
                    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
                        <Header />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}

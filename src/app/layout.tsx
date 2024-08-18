import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {Providers} from "@/app/providers";
import {app_main_font} from "@/fonts";
import {ReactNode} from "react";
import "./globals.css";

export default function RootLayout({children}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={app_main_font.className}>
        <Providers>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}

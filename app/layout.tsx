import "./globals.css"
import { Exo_2 } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "OperonAI - Intelligence in Motion",
  description: "Delivering cutting-edge AI solutions across industries",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exo2.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


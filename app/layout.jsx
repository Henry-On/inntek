import '@/public/bootstrap/css/bootstrap.min.css';
import '@/public/fontawesome5/css/fontawesome.min.css';
import "@/styles/scss/stylesheet.scss"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import BootstrapClient from '@/components/BootstrapClient'

export const metadata = {
  title: 'InnTek',
  description: 'Technology Driven - Solution Center',
  authors: [{ name: 'InnTek Team' }],
  icons: {
    icon: '/images/icons/favicon.svg',
  },
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  )
}

export default RootLayout

import '@/public/bootstrap/css/bootstrap.min.css';
import '@/public/fontawesome5/css/fontawesome.min.css';
import "@/styles/scss/stylesheet.scss"
import BootstrapClient from '@/components/BootstrapClient'
import GSAPController from '@/components/GSAPController'

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
        {children}
        <BootstrapClient />
        <GSAPController />
      </body>
    </html>
  )
}

export default RootLayout


import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

const SiteLayout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default SiteLayout


import Header from "@/components/Header"
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

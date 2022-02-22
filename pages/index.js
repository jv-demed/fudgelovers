import Main from '../src/components/Main/Main';
import ProductsArea from '../src/components/ProductsArea/ProductsArea';
import AboutArea from '../src/components/AboutArea/AboutArea';
import ContactArea from '../src/components/ContactArea/ContactArea';
import Footer from '../src/components/Footer/Footer';

export default function Home() {
  return(
    <>
      <Main />
      <ProductsArea />
      <AboutArea />
      <ContactArea />
      <Footer />
    </>
  )
}
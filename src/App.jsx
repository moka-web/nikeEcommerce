
import {
   CustomerReviews,
   Footer,
   Hero,
   PopularProducts,
   Services,
   SpecialOffers,
   Subscribe,
   SuperQualityProducts} from "./sections"
import Nav from "./components/Nav"

const App = ()=>(
  <main className="relative">
   <Nav></Nav>
  <section className="xl:padding-l wide:padding-r padding-b">
  <Hero></Hero>
  </section>
  <section className="padding">
    <PopularProducts></PopularProducts>
  </section>
  <section className="padding">
    <SuperQualityProducts></SuperQualityProducts>
  </section>
  <section className="padding-x py-10">
    <Services></Services>
  </section>
  <section className="padding">
    <SpecialOffers></SpecialOffers>
  </section>
  <section className=" bg-pale-blue padding ">
    <CustomerReviews></CustomerReviews>
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe></Subscribe>
  </section>
  <section className=" bg-black   padding-x padding-t pb-8">
    <Footer></Footer>
  </section>
  
  </main>

)


 
  


export default App
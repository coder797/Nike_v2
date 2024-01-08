import Nav from "./components/Nav"
import { Hero, PopularProducts, SuperQuality } from "./sections"

const App = () => {
  return <main className="relative">
    <Nav></Nav>
   <Hero/>
    <PopularProducts/>
    <SuperQuality/>
    <section className="padding-x py-10">
     Services
    </section>
    <section className="padding">
     Special offer
    </section>
    <section className="bg-pale-blue padding">
     Customer Reviews
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
     Subscribe
    </section>
    <section className="bg-black padding-x padding-t pb-8 text-white">
     Footer
    </section>
  </main>
}
export default App
import Hero from "./components/hero"
import News from "./components/news/main"
import PropFirms from "./components/Propfirms/main"
import JoinUs from "./components/JoinUs/main"
import Footer from "./components/Footer/main"

const Home = () => {
  return (
    <div className="py-14 space-y-10">
      <Hero />
      <News />
      <PropFirms />
      <JoinUs />
      <Footer />
    </div>
  )
}

export default Home

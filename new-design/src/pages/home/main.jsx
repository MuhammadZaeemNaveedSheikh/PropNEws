import About from "./components/about"
import Archive from "./components/archive"
import Hero from "./components/hero"


const Home = () => {
  return (
    <main className="space-y-12">
      <Hero />
      <About />
      <Archive />
    </main>
  )
}

export default Home

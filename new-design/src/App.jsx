import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/main"
import { AuthProvider } from "./context/auth"
import Footer from "./components/Footer/main"

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main className='max-w-[1300px] mx-auto px-5 pt-14'>
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  )
}

export default App

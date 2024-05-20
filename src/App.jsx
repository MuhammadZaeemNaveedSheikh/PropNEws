import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/main'

function App() {

  return (
    <>
      <Navbar />
      <main className='max-w-[1300px] mx-auto px-5'>
        <Outlet />
      </main>
    </>
  )
}

export default App

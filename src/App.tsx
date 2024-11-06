import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Nav } from "./components/Nav"
import { Home } from "./components/home"
import { Footer } from "./components/Footer"
import { ScrollerMotion } from "scroller-motion"


function App() {

  return (
    
    <BrowserRouter>
      <div className="flex relative max-h-screen">
        <Nav />
        <ScrollerMotion>
        <div className="flex flex-col relative z-10 h-full w-full justify-center align-middle min-h-screen bg-gradient-to-tr from-neutral-900 via-gray-900 to-neutral-900 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />

        </div>
        </ScrollerMotion>
      </div>
    </BrowserRouter>
  )
}

export default App

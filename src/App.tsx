import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Nav } from "./components/Nav"
import { Home } from "./components/home"

function App() {

  return (
    <BrowserRouter>
      <div className="flex relative max-h-screen overflow-clip">
        <Nav />
        <div className="flex relative z-10 w-full justify-center align-middle min-h-screen bg-gradient-to-tr from-neutral-900 via-gray-900 to-neutral-900 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

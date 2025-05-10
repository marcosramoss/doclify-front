import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Painel from "./pages/Painel"

import LayoutWrapper from "./components/LayoutWrapper"



function App() {


  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/painel" element={<Painel />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  )
}

export default App

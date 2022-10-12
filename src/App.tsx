import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "@/components/Navigation";

import Home from '@/views/Home';
import Clients from '@/views/Clients';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="content">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/clients" element={<Clients />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
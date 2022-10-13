import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "@/components/Navigation";

import Base from '@/views/Base';
import Clients from '@/views/Clients';

import '@/styles/general.scss';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="content">
          <Routes>
              <Route path="/" element={<Base />} />
              <Route path="/clients" element={<Clients />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
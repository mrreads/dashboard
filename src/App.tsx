import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "@/components/Navigation";

import Base from '@/views/Base';
import Clients from '@/views/Clients';

import { Provider } from 'react-redux';
import { store } from '@/store';

import '@/styles/general.scss';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <div className="content">
            <Routes>
                <Route path="/" element={<Base />} />
                <Route path="/clients" element={<Clients />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
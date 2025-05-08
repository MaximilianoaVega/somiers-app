 import * as React from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.tsx';
import MainContent from './components/MainContent.tsx';
import Footer from './components/Footer.tsx';
import ContactPage from './components/ContactPage.tsx';
 
function App() {
  return (
    <BrowserRouter>
    <div className="App flex-container w-100" >
      <Header></Header>
      <Routes>
        <Route path='/' element={<MainContent/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

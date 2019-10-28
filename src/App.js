import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Table from './components/Table'
import CurrentDate from './components/CurrentDate'



function App() {
  return (
    <div className="main">
      <Header />
      <div className="container main-block pb-4">
        <div className="py-4">
          <CurrentDate />
        </div>
        <div className="paper mb-4">
          <Menu />
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
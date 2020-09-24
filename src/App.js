import React, { useState } from 'react';
import './App.css';

// pages
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

function App() {
  const [page, setPage] = useState(1)

  const activePage = () => {
    switch(page) {
      case 1:
        return <Page1 changePage={() => setPage(2)}/>;
      case 2:
        return <Page2 changePage={() => setPage(3)} backPage={() => setPage(1)}/>
      case 3:
        return <Page3 changePage={() => setPage(4)} backPage={() => setPage(2)}/>;
      case 4:
        return <Page4 changePage={() => setPage(5)} backPage={() => setPage(3)}/>;
      default:
        return <div> </div>;
    }
  }

  return (
    <div className="App">
      {activePage()}
    </div>
  );
}

export default App;

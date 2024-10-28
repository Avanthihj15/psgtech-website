import React from 'react';
import Header from "../header";
import TopBar from "./components/TopBar";
import BottomBar from './components/BottomBar';
//import BottomBar from './components/BottomBar';

const Navbar : React.FC = () => {
  return (
    <div>
      <Header />
      <TopBar />
      <BottomBar />
    </div>
  );
};




export default Navbar;

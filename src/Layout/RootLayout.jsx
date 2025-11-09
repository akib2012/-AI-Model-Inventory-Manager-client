import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col h-screen bg-black'>
          <header>
              <Header></Header>
          </header>
          <main className='flex-1 -mt-6 '>
            <Outlet></Outlet>
          </main>

          <footer>
             <Footer></Footer>
          </footer>

        </div>
    );
};

export default RootLayout;
import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='bg-black'>
          <header>
              <Header></Header>
          </header>
          <main>
            <Outlet></Outlet>
          </main>

          <footer>
             <Footer></Footer>
          </footer>

        </div>
    );
};

export default RootLayout;
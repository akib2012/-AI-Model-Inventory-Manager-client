import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='flex flex-col h-screen'>
          <header>
              <Header></Header>
          </header>
          <main className='bg-linear-to-r from-[#000814] to-[#001D6E] flex-1'>
            <Outlet></Outlet>
          </main>

          <footer>
            <h4>this is footer</h4>
          </footer>

        </div>
    );
};

export default RootLayout;
import React from 'react';
import MainHeader from './MainHeader';
import WelcomeHeader from './WelcomeHeader';
import Header from './Header';
import Footer from './Footer';


const Layout = props => {
    return (
        <>
            <MainHeader/>
            <WelcomeHeader/>
            <Header/>

            <main>
                {props.children}
            </main>
            <Footer/>
        </>
     );
}

export default Layout;
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;

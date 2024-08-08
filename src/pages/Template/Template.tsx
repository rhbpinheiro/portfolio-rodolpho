import Pagina from '@/components/Pagina';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
   <Pagina>
    <Header/>
    {children}
    <Footer/>
   </Pagina>
  );
};


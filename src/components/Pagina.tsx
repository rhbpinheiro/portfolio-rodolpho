import React from 'react';

const Pagina: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full dark:bg-gray-900 bg-slate-100 pt-24 md:pt-32 ">
      {children}
    </div>
  );
};

export default Pagina;

import React from 'react';

const Area: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="w-full max-w-[1400px] mx-auto">
        {children}
      </div>
    );
  };
  
  export default Area;
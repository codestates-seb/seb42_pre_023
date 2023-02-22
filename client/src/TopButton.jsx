import React from 'react';
import {BiArrowToTop} from 'react-icons/bi'

function TopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0
    });
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: 50,
        right: 50,
        padding: 5,
        borderRadius: 50,
      }}
    ><BiArrowToTop size={30}/></button>
  );
}

export default TopButton;
import React from 'react';

function Header(props){
  return (
    <div>
        <h1>{props.title_1}</h1>
        <h2>{props.title_2}</h2>
    </div>
  );
}

export default Header;
import React from 'react';

function InternalUl(props){
  if(props.childrens.length > 0){
    return (
      <React.Fragment>
        {props.name}
        <ul>
          {props.childrens.map(function(children, index_in){  
            return <li key={index_in}>{children}</li>    
          })}
        </ul>
      </React.Fragment>
    );
  }else{
    return(
      <section>
        {props.name}
      </section>
    );
  }

}

export default InternalUl;
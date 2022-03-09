import React from 'react';
//import InternalUl from './internal_ul';
function OrderList(props) {
  return (
    <ol>
      {props.array_aux.map(function(data, index_out){
        return (
          <li key={index_out}>
            {/* <InternalUl childrens={data.childrens} name={data.name}/> */}
            { InternalUl(data.childrens, data.name) }
          </li>
        );
      })}
    </ol>
  );
}

function InternalUl(childrens, name){
  if(childrens.length > 0){
    return (
      <React.Fragment>
        {name}
        <ul>
          {childrens.map(function(children, index_in){  
            return <li key={index_in}>{children}</li>    
          })}
        </ul>
      </React.Fragment>
    );
  }else{
    return(
      <section>
        {name}
      </section>
    );
  }

}

export default OrderList;
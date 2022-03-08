import React from 'react';
import InternalUl from './internal_ul';
function OrderList(props) {
  return (
    <ol>
      {props.array_aux.map(function(data, index_out){
        return (
          <li key={index_out}>
            <InternalUl childrens={data.childrens} name={data.name}/>
          </li>
        );
      })}
    </ol>
  );
}

export default OrderList;
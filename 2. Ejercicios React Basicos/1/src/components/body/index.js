import React from 'react';

function Body(props) {
  return (
    <div>
        <p>
          {props.object_1.paragraph_1}
          <br/>
          {props.object_1.paragraph_2}
          <br/>
          {props.object_2.list1}
          <br/>
        </p>
    </div>
  );
}

export default Body;
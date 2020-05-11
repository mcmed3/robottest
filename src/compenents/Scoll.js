import React from 'react';

const Scoll = (props) =>{

    return (
        <div style={{overflow : 'scroll',border : 'solid 2px black' ,height :' 500px '}}>
           { props.children}
        </div>
    );
}

export default Scoll;
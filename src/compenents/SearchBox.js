import React from 'react';


const SearchBox = ({serachField,searchCahnge}) => { 
    return (
        <div className='pa2 '>
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        onChange={searchCahnge}
        type="search" 
        placeholder="serch for your ronbnot"/>
          
        </div> 

    );
}
export default SearchBox;
import React, {useEffect} from 'react';

const UseTitle = (props) => {
    useEffect(()=>{
        document.title=props +' hits on button';
      })  
};

export default UseTitle;
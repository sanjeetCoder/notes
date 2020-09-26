import React from 'react';
import ReactDom from 'react-dom';
import Other from './Other';
import './App.css'

const OtherDom= () => {
    return (
        ReactDom.createPortal(<Other />, document.querySelector('#demo'))
    )
}

export default OtherDom;
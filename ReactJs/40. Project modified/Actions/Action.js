const Calculate = (percentage) => {
    console.log('******************************')
    return{
        type : 'CALCULATE',
        payload : percentage
    };
}

export default  Calculate;

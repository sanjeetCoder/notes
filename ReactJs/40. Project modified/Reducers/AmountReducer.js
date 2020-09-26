
const initialState={
    price:2000
};
const fixedPrice = 2000;
const AmountReducer = (state=initialState,action) => {
    console.log('######################')
    console.log(action.payload);
    
    switch(action.type)
    {
        case "CALCULATE":
            return {
                // price : fixedPrice-((action.payload)*(fixedPrice)/100)
                price:fixedPrice-(fixedPrice*action.payload)/100
            }
        default:
            return state;
    }
};
export default AmountReducer;
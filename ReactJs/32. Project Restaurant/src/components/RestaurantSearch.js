import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'

class RestaurantSearch extends Component {
    constructor(){
        super();
        this.state={
            searchData:[],
            noData:false
        }
    }

    change(key){
        // console.log(key);
        fetch("http://localhost:3000/restaurant?q="+key).then((data)=>{
            data.json().then((res)=>{
                console.warn(res);
                if(res.length>0){

                    this.setState({searchData:res,noData:false})
                }
                else{
                    this.setState({searchData:"",noData:true})
                }
            })
        })
    }
    render() {

        const SearchData=this.state.searchData.map((item)=>{
            return (
            <div>
                <p className="row-property"> {item.name}</p>
            </div>
            )
        })
        return (
            <div>
                <NavBarMenu/>
                <h1>Restaurant Search</h1>
                <input type="text" onChange={(event)=>this.change(event.target.value)}/>
                
                {SearchData}
     
            </div>
        );
    }
}

export default RestaurantSearch;
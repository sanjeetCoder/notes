import React, { Component } from 'react';
import Menu from './Menu';
import Get_Started from './Get_Started';
import Aboutus from './Aboutus';
import Franchise from './Franchise';
import Careers from './Careers';
import Contact from './Contact';
import FitnessInstitute from './FitnessInstitue';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import './Lefty.css'


class Logo extends Component {
    render(){
    return(
        <BrowserRouter>
        <div>
            <img src="../images/logo.jpg" alt="Gold" className="logo"></img>
            <Menu />
            <Switch>
            <Route path="/" exact component={Get_Started} />
            <Route path="/Aboutus" component={Aboutus} />
            <Route path="/Careers" component={Careers} />
            <Route path="/Franchise" component={Franchise} />
            <Route path="/FitnessInstitute" component={FitnessInstitute} />
            <Route path="/Contact" component={Contact} />            
            </Switch>
        </div>
        </BrowserRouter>
    );
}
}
export default Logo;
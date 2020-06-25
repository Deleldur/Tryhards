import React, { Component } from 'react';
import { Banner, Footer, Content } from '../common/index';
import image from "../../img/B1.jpg";


 class Home extends Component {
    render() {
        return (
          
          <React.Fragment>
            <div className="content">
            <Banner image={image} id={"JimsBanner"}/>
            <Content/>
            </div>
            <Footer/>
            
          </React.Fragment>
        )
    }
} 

export default Home


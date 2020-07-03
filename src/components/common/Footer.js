import React, { Component } from 'react'

 class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    
                        

                        <div className="row">
                       
                        <p className="footer-text">
                            &copy;{new Date().getFullYear()} TRYHARDS  | ALL right reserved | All 
                            trademarks referenced herein are properties of their respective owners.
                        </p>
                        
                        </div>

                        <hr /> 
                    
                    </div>

            
                
            </div>
        )
    }
}

export default Footer

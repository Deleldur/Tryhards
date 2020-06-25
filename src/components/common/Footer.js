import React, { Component } from 'react'

 class Footer extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    
                        

                        <div className="row">
                       
                        <p className="footer-text">
                            &copy;{new Date().getFullYear()} TRYHARDS  | ALL right reserved |
                        </p>
                        
                        </div>

                        <hr /> 
                    
                    </div>

            
                
            </div>
        )
    }
}

export default Footer

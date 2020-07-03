import React, { Component } from "react";
import "../../sass/navigation.scss";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      path: ""
    };
  }

  componentDidMount = () => {
    this.setActiveStyle();
  };

  animateMenu = () => {
    this.setActiveStyle();
    this.setState({ open: !this.state.open });
  };

  setActiveStyle = () => {
    let currentUrl = window.location.pathname;
    console.log("current url : " + currentUrl);
    this.setState({ path: currentUrl });
  };

  render() {

    // this.setActiveStyle();

    let { open, path } = this.state;
    return (
      <header className="header">
        {/* <div className="container"> */}
        <div
          id="nav-icon"
          className={open ? "open" : "closed"}
          onClick={this.animateMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <nav onClick={this.animateMenu} className={open ? "visible" : "hidden"}>

      {/* The links in the hamburger menu  */}

        {(() => {
            if (path === "home") {
              return (
                <li><a href="#home">Home</a>
                  <span className="home__link" />
                  </li>
              );
            } else {
              return (
                <li><a href="#home">Home</a>
                  <span className="home__link" />
                  </li> 
              );
            }
          })()}

        


        {(() => {
            if (path === "welcome") {
              return (
                <li><a href="#welcome">Welcome</a>
                  <span className="welcome__link" />
                  </li>
              );
            } else {
              return (
                <li><a href="#welcome">Welcome</a>
                  <span className="welcome__link" />
                  </li> 
              );
            }
          })()}

        


        {(() => {
            if (path === "media") {
              return (
                <li><a href="#media">Media</a>
                  <span className="media__link" />
                </li>
              );
            } else {
              return (
                <li><a href="#media">Media</a>
                  <span className="media__link" />
                </li> 
              );
            }
          })()}

        

          
        {(() => {
            if (path === "recruitment") {
              return (
                <li><a href="#recruitment">Recruitment</a>
                  <span className="recruitment__link" />
                  </li>
              );
            } else {
              return (
                <li><a href="#recruitment">Recruitment</a>
                  <span className="recruitment__link" />
                  </li> 
              );
            }
          })()}

         

          {(() => {
            if (path === "contacts") {
              return (
                <li><a href="#contacts">Contacts</a>
                  <span className="contacts__link" />
                  </li>
              );
            } else {
              return (
                <li><a href="#contacts">Contacts</a>
                  <span className="contacts__link" />
                  </li> 
              );
            }
          })()}


        </nav>
        
      </header>
    );
  }
}
export default Navigation;
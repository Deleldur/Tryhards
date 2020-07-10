import React, { Component } from "react";




// importing the images

import image1 from "../../img/B1.jpg";
import image2 from "../../img/B2.jpg";
import image3 from "../../img/B3.jpg";
import image4 from "../../img/B4.jpg";
import image5 from "../../img/B5.jpg";


const imgUrls = [
  {
    image: image1,
    title: "",
    
    body: (
      <span>
        <h1 className="tryhards"> Tryhards </h1>
        <h2 className="community"> A Bonobo community</h2>
      </span>
    )
  },
  {
    image: image2,
    title: "",
    body: (
      <span>
        <h1 className="tryhards"> Tryhards </h1>
        <h2 className="community"> A Bonobo community</h2>
      </span>
    )
  },
  {
    image: image3,
    title: "",
    body: (
      <span>
        <h1 className="tryhards"> Tryhards </h1>
        <h2 className="community"> A Bonobo community</h2>
      </span>
    )
  },
  {
    image: image4,
    title: "",
    body: (
      <span>
        <h1 className="tryhards"> Tryhards </h1>
        <h2 className="community"> A Bonobo community</h2>
      </span>
    )
  },
  {
    image: image5,
    title: "",
    body: (
      <span>
        <h1 className="tryhards"> Tryhards </h1>
        <h2 className="community"> A Bonobo community</h2>
      </span>
    )
  },
 
];

const ImageSlide = ({ data }) => {
  
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${data.image})`
      }}
    >
      
      {data.body}
    </div>
  );
};

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      intervalId: "",
      imageChangeTime: 7000
    };
  }

  componentDidMount = () => {
    this.setBannerAnimation();
  };

  setBannerAnimation = () => {
    const id = new Date().getSeconds().toString() + "INTERVAL_ID";
    this.setState({ intervalId: id });
    this.animateBanner();
  };

  animateBanner = () => {
    let { imageChangeTime } = this.state;
    this.intervalId = setInterval(() => {
      
      const lastIndex = imgUrls.length - 1;
      let { pageNum } = this.state;

      if (pageNum === lastIndex) {
        this.setState({ pageNum: 0 });
      } else {
        this.setState({ pageNum: this.state.pageNum + 1 });
      }
    }, imageChangeTime);
  };

  next = () => {

    //  clear ther interval

    clearInterval(this.intervalId);
    const lastIndex = imgUrls.length - 1;
    
    let { pageNum } = this.state;
    if (pageNum === lastIndex) {
      this.setState({ pageNum: 0 });
      this.setBannerAnimation();
    } else {
      this.setState({ pageNum: pageNum + 1 });
      this.setBannerAnimation();
    }

    // starts the interval
  };

  prev = () => {
    //  clear ther interval
    clearInterval(this.intervalId);
    let { pageNum } = this.state;
    if (pageNum == 0) {
      this.setBannerAnimation();
      return;
    } else {
      this.setState({ pageNum: this.state.pageNum - 1 });
      this.setBannerAnimation();
    }
    // starts the interval
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  render() {
    let { pageNum } = this.state;
    

    return (
      <section className="banner">
        <div className="banner">
          
          <ImageSlide data={imgUrls[pageNum]} />
          
        </div>
      </section>
    );
  }
}
export default Banner;


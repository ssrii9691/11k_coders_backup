import React, { Component } from "react";

export default class ImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
       
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0hI8qVJeYl6X4kRP8qJlPcb_AzUECb6rSHs9N-LCdA&s"
            alt=""
            width={100}
          />
        
      </div>
    );
  }
  componentWillUnmount(){
    console.log("This component is going to be Removed from DOM")
  }
}
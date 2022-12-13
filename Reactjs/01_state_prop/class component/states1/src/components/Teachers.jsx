import { Component } from "react";

export default class Teacher extends Component {
  constructor() {
    super();
    this.state = {
      showName: true,
      showImages:false,
      school: "sri saraswathi shishu mandir",
      lecturers: {
        maths: "sridhevi",
        social: "shiva",
        hindi: "shivraj",
        telugu: "amma",
      },
      subjects: ["maths", "physics", "social", "science"],

      images: [
        "https://cdn-icons-png.flaticon.com/512/888/888859.png",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
        "https://www.computerhope.com/jargon/j/javascript.png",
        "https://bitnetinfotech.com/wp-content/uploads/2022/08/Frameworks-for-React-JS.jpg",
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.showName && <h2>{this.state.school}</h2>} <hr />
        <ul>
          {Object.values(this.state.lecturers).map((value, i) => {
            return <li key={i}>{value}</li>;
          })}
        </ul>
        <hr />
        <ul>
          {this.state.subjects.map((val, i) => {
            return (
              <div key={i}>
                <h2>this subject is</h2>
                <li>
                  <h2>{val}</h2>
                </li>
              </div>
            );
          })}
        </ul>
        <hr />
        
            {/* {this.state.showImages && this.state.images.map((imagval,i)=>
                <img src={imagval} alt="" key={i} style={{width:100,height:100}} />
            )}
         */}

         {this.state.showImages ? (this.state.images.map((imgval,i)=>(
            <img src={imgval} alt="" key={i} style={{width:100,height:100}} />
         ))):(
            <p>here is empty</p>
         )}
      </div>
    );
  }
}

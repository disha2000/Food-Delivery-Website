// import UserClass from "./UserClass";
// const About = () => {
//     return <div className="about__container">
//         <h1>SnapEaters are you hungary??? you are in right place lets order somthing!!!</h1>
//         <h2>By</h2>
//         <UserClass name={"Disha Doshi"}/>
//     </div>
// }

// export default About;



import React from "react";
import UserClass from "./UserClass";
import { RESTUARANT_URL } from "../utils/constants";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor about");
  }
  async componentDidMount() {
    const response = await fetch(RESTUARANT_URL)
    console.log('componentDidMount About')
  }
  render() {
    console.log("render about");
    return (
      <div className="about__container">
        <h1>
          SnapEaters are you hungary??? you are in right place lets order
          somthing!!!
        </h1>
        <h2>By</h2>
        <UserClass name={"Disha Doshi"} />
      </div>
    );
  }
}
export default About;

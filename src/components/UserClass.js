import React from "react";
console.dir(new React.Component())
console.log(Object.getOwnPropertyDescriptors(new React.Component()));

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor userclass')
    // console.log(this)
    // console.log(Object.getOwnPropertyDescriptors(this));
    // console.log(this.__props__);
    // console.log(new React.Component())
    // this.name = null
    this.state = {
        count: 0,
        count1: 1,
    }
  
  }
  componentDidMount() {
    console.log('componentDidMount userclass')
  //   this.setState({
  //     count: this.state.count + 1
  // })

  this.interval = setInterval(() =>{
    console.log('sample animation')
  },1000)
  }

  async componentDidUpdate(preProps, prevState) {
    console.log('componentDidupdate userclass')
   

   

     // console.log(preProps, prevState)
    // if (prevState.count1 != this.state.count1) {
    //   
    // }

    // const response = await fetch('https://api.github.com/users/disha2000');
    // const data = await response.json();
    // console.log(data);
    
  }
  componentWillUnmount() {
    console.log('componentwillunmount')
    clearInterval(this.interval)
  }
  render() {
    console.log('redner userclass')
    const { name } = this.props;
    const {count, count1} = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{count}</h2>
        <h2>{count1}</h2>
        <button onClick={() => {
            this.setState({
                count: this.state.count + 1
            })
        }}>Increase by</button>
      </div>
    );
  }
}

export default UserClass;

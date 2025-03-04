// import UserClass from "./UserClass";
import { useState } from 'react';
import {useGetUsersDataQuery, useCreateUserMutation} from '../store/services/userApi'
const About = () => {
    const {data, error, isLoading} = useGetUsersDataQuery('1');
    // console.log(useGetUsersDataQuery('1'))
    // console.log(useCreateUserMutation())
    const [      createUser,
      {
        data: postData,
        error: postError,
        isLoading: postLoading
      }
     ] = useCreateUserMutation();
    const [userInfo, setUserInfo] = useState({
      name: '',
      job:''
    })
    if (isLoading) {
      return <div className=" mt-[80] py-4 px-[10%] dark:bg-gray-900">loading</div>
    }
    if (error) {
      return <div className=" mt-[80] py-4 px-[10%] dark:bg-gray-900">error</div>
    }
    const handleInputChange = (e) =>{
      const{name, value} = e.target;
      setUserInfo((prevState) => ({
        ...prevState,
        [name] : value
      }))
    } 
    const handleAddUser = async() =>{
      console.log(userInfo)
      await createUser(userInfo);
      // refetch()
    }
    const usersData = data?.data;
    return <div className=" mt-[80] py-4 px-[10%] dark:bg-gray-900">
        <div>
          <input placeholder="name" name="name" value={userInfo.name} onChange={(e) => handleInputChange(e)}/>
          <input placeholder="job" name="job" value={userInfo.job} onChange={(e) => handleInputChange(e)}/>
          <button className='cursor-pointer' onClick={ () =>
            handleAddUser()
          }>Add User</button>
        </div>
        {
          usersData.map((_user) => {
            return (<div key={_user.id}>{_user.first_name} {_user.last_name}</div>)
          })
        }
        {/* <UserClass name={"Disha Doshi"}/> */}
    </div>
}

export default About;



// import React from "react";
// import UserClass from "./UserClass";
// import { RESTUARANT_URL } from "../utils/constants";

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("constructor about");
//   }
//   async componentDidMount() {
//     const response = await fetch(RESTUARANT_URL)
//     console.log('componentDidMount About')
//   }
//   render() {
//     console.log("render about");
//     return (
//       <div className="about__container">
//         <h1>
//           SnapEaters are you hungary??? you are in right place lets order
//           somthing!!!
//         </h1>
//         <h2>By</h2>
//         <UserClass name={"Disha Doshi"} />
//       </div>
//     );
//   }
// }
// export default About;

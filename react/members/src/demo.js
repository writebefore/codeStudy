// import React from "react"
// import "./demo.css"
// const MyComponent = () => {
//     // setState setData
//     // data{
//     //     myName:"John Doe"
//     // }
//     // MVVM
//     // react hooks setData
//     const [myName, setMyName] = React.useState('John Doe')
//     return (
//         <div>
//             <h2 className="title">{myName}</h2>
//             <input
//                 value={myName}
//                 onChange={(e) => setMyName(e.target.value)}
//             />
//         </div>
//         )
// }
// export {
//     MyComponent
// };

import React from "react";
const MyComponent = () => {
  const [username, setUsername] = React.useState("test");
  const [list,setList] = React.useState([])
  React.useEffect(() => {
    // setTimeout(()=>{
    //   setUsername("John")
    // },1500)
    fetch("http://neteasecloudmusicapi.zhaoboy.com/toplist/detail")
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        setList(data.list)
      });
  }, []); //ONLOAD
  return (
    <div>
      <h4>{username}</h4>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <ul>
      {
          list.map((item,index) => <li key={index}>{item.description}</li>)
      }
      </ul>
    </div>
  );
};
export { MyComponent };

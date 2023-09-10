import './App.css'; 
import axios  from 'axios';
import { useState,useEffect } from 'react';
import UserComponent from "./userComponent"
function App() { 
  // const dummy={};
  // function getData(){
  //   axios.get("https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d").then((respose)=>{
  //       const {data}=respose.data;
  //       for(let user in data){
  //         if(data[user].status=='Applied'){
  //           appliedUsers.push(data[user])
  //           // setappliedUsers([...appliedUsers,data[user]]);
  //           console.log(appliedUsers)
  //           // console.log([...appliedUsers,data[user]])
  //         }else if(data[user].status=='Accepted'){

  //           // setAcceptedUsers([...acceptedUsers,data[user]]);
  //         }else{
  //           // setRejectedUsers([...rejectedUsers,data[user]]);
  //         }
  //       } 
  //   }).catch((error)=>{
  //     console.log(error);
  //   }) 
  // }
  // getData()
  const [appliedUsers,setappliedUsers]=useState([]);
  const [acceptedUsers,setAcceptedUsers]=useState([]);
  const [rejectedUsers,setRejectedUsers]=useState([]);
  useEffect( ()=>{
     axios.get("https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d").then((respose)=>{
        const {data}=respose.data;

  const nappliedUsers=[]
  const nacceptedUsers=[]
  const nrejectedUsers=[]
        for(let user in data){
          if(data[user].status=='Applied'){ 
            nappliedUsers.push(data[user])
            
          }else if(data[user].status=='Accepted'){  
            nacceptedUsers.push(data[user]);
          }else{ 
            nrejectedUsers.push(data[user]);
          }
        }
        setappliedUsers(nappliedUsers);
        setRejectedUsers(nrejectedUsers);
        setAcceptedUsers(nacceptedUsers);
    }).catch((error)=>{
      console.log(error);
    }) 
  },[])
  return (
    // <div className="Main"> 
      <div className="App">  
      <div>
      <h2>Applied</h2>
      {appliedUsers.map((user)=>{
          return <UserComponent key={user.id} id={user.id} last_updated_at={user.last_updated_at} location={user.location} gender={user.gender} />
        })}
      </div>  
      <div>
        <h2>Accepted</h2>
        {acceptedUsers.map((user)=>{
          return <UserComponent key={user.id} id={user.id} last_updated_at={user.last_updated_at} location={user.location} gender={user.gender} />
        })}
      </div>
      <div>
        <h2>Rejected</h2>
        {rejectedUsers.map((user)=>{
          return <UserComponent key={user.id} id={user.id} last_updated_at={user.last_updated_at} location={user.location} gender={user.gender} />
        })}
      </div>
    </div>
    // </div>
  );
}

export default App;

import { Button, TextField } from '@mui/material'
import axios from 'axios'
import  React,{ useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var[inputs,setinputs]=useState({Name:"",Age:"",Contact:"",Salary:"",Department:""})
   var navigate = useNavigate()
   var location = useLocation()
   console.log(location.state)

  const inputHandler=(e)=>{
    setinputs({...inputs,[e.target.name]:e.target.value})
    console.log(inputs)
  };
  useEffect(()=>{
    if(location.state !== null){
      console.log("Debug" + location.state.val.Name)
      setinputs({
        ...inputs,
        Name:location.state.val.Name,
        Age:location.state.val.Age,
        Contact:location.state.val.Contact,
        Salary:location.state.val.Salary,
        Department:location.state.val.Department
      })
  }
},[])
  const AddHandler=()=>{
    if(location.state!==null){
      axios.put("http://localhost:3008/edit/"+location.state.val._id,inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data.message)
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
    })
  }else{
      axios.post("http://localhost:3008/add",inputs)
      .then((res)=>{
        console.log(res)
        alert(res.data.message)
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })}
    }
  return (
    <div>
      <TextField 
      variant='outlined'
      label="Name"
      onChange={inputHandler}
      name="Name"
      value={inputs.Name}
      />
      <br /><br />
      <TextField 
      variant='outlined'
      label="Age"
      onChange={inputHandler}
      name="Age"
      value={inputs.Age}
      />
      <br /><br />
      <TextField 
      variant='outlined'
      label="Contact"
      onChange={inputHandler}
      name="Contact"
      value={inputs.Contact}
      />
      <br /><br />
      <TextField 
      variant='outlined'
      label="Salary"
      onChange={inputHandler}
      name="Salary"
      value={inputs.Salary}
      />
      <br /><br />
      <TextField 
      variant='outlined'
      label="Department"
      onChange={inputHandler}
      name="Department"
      value={inputs.Department}
      />
      <br /><br />
      <Button variant="contained" color="error" onClick={AddHandler}>SUBMIT</Button> 
    </div>
  )
}

export default Add

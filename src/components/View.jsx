import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
  var[emp,setemp]=useState([])
  var navigate = useNavigate()
  // useEffect(()=>{},[])
  useEffect(()=>{
    axios.get("http://localhost:3008/view")
  .then((res)=>{
    console.log(res)
    setemp(res.data)
  })
  .catch((err)=>
    console.log(err))
  },[]);
  const delvalue=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3008/remove/"+id)
    .then((res)=>{
      alert(res.data.message)
      Window.location.reload()
    })
    .catch((err)=>console.log(err))
  }
  const updatevalue=(val)=> {
    console.log("up clicked")
    navigate("/a",{state:{val}})
  }
    return(
    <div>
      <TableContainer>
        <Table>
            <TableHead>
              
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>Department</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
              {emp.map((val,i)=>{
                return(
                  <TableRow>
                    <TableCell>{val.Name}</TableCell>
                    <TableCell>{val.Age}</TableCell>
                    <TableCell>{val.Contact}</TableCell>
                    <TableCell>{val.Salary}</TableCell>
                    <TableCell>{val.Department}</TableCell>
                    <TableCell>
                    <Button variant="contained" color="error"
                    onClick={()=>{delvalue(val._id)}}
                    >DELETE</Button>&nbsp;&nbsp;
                    <Button variant="contained" color="error"
                    onClick={()=>{updatevalue(val)}}
                    >UPDATE</Button>
                    </TableCell>
                </TableRow>
                  )
              })}
            </TableBody>
            </Table>
            </TableContainer>
            
    </div>
  )
}

export default View

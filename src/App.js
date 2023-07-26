import axios from 'axios';
import React from 'react'
import Spinner from './Spinner';
import Card from './Card';
import {useState,useEffect} from "react"

const App = () => {
  const [search,setSearch]=useState("")
  const [data,setData]=useState([])
  useEffect(() =>{
    axios.get('https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json').then(
      res => {
        !search ? setData(res.data) : setData(res.data.filter(songs => songs.singer===search))
      }
    )
  },[search])

  const submitHandler=(e)=>{
      e.preventDefault();
      setSearch(search)
  } 
return (
  <div>
      <nav className='navbar navbar-light bg-light'>
          <div className='container-fluid'>
              <h2  className="navbar-brand" >Telugu Skill Hub <span style={{color:"blue"}}>𝄞</span></h2>
              <form  className='d-flex' onSubmit={submitHandler}>
                  <input className="form-control me-2" type="text" onChange={(e)=>setSearch(e.target.value)} aria-label="Search" placeholder='Search'/>
                  <input  className="btn btn-outline-success" type="submit" value="Search"/>
              </form>
          </div>

      </nav>
      {data.length ?
      <Card songs={data}/>:
      <Spinner/>
      }
    
  </div>
)
}

export default App

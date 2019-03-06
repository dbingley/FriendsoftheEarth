import React, {
  useState,
  useEffect
} from 'react'
import EntryForm from '../EntryForm.js'


const Home = (props) => {


  return ( <
    div className = "Enter" >
    <
    section >
    <
    h1 > Welcome to a Greener world < /h1> <
    h2 > Sign - up below to start changing the world < /h2>

    <EntryForm/>

     <
    /section>


    <
    /div>
  )
}

export default Home

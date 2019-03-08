import React, { useState, useEffect } from 'react'
import { Formik }  from 'formik'
import Navbar from '../Components/navbar.js'

const Today = (props) => {
    const [userData, setUserData] = useState(null)
    const [loaded, setLoaded] = useState(false)

    return (
      <>
      <Navbar/>
        <div className="Today">
            <h1>Today's roundup</h1>
            <br/>
            <h2>Latest air-quality</h2>
<br/>
            <h3>Alcohol:</h3>
            <h3>CH4:</h3>
            <h3>CO:</h3>
            <h3>H2:</h3>
            <h3>LPG:</h3>
            <h3>Propane:</h3>
            <h3>Smoke:</h3>
            <br/>
            <h2>Other stat's</h2>

            <br/>
            <h3>Humidity:</h3>
            <h3>Latitude:</h3>
            <h3>Longitude:</h3>
            <h3>Pressure:</h3>
            <h3>Temperature:</h3>
            <h3>Last updated:</h3>

            />


        </div>
        </>


    )
}

export default Today

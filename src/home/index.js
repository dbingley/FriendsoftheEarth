import React, { useState, useEffect } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Navbar from '../Components/navbar.js'
import AddPost from '../addPost/addPost.js'

const Home = (props) => {

    const [feedData, setfeedData] = useState(null)
    const [loaded, setLoaded] = useState(false)



    useEffect(() => {
        window.db.collection("feed-data").get().then((querySnapshot) => {
            let feedData = []
            querySnapshot.forEach((doc) => {
                feedData.push(doc.data())
                //console.log(`${doc.id} => ${doc.data()}`);
            });
            setfeedData(feedData)
            setLoaded(true)
        });
    }, [window.db])
    //console.log(props)

    return (

      <>
      <Navbar/>

        <div className="Home">
            {!loaded && (
              //  <p>Loading</p>
              <div>
              <ProgressBar animated now={100} label='100'/>
              </div>

            )}
            {loaded && (
                <section>
                <br/>
                <h1>Welcome to your feed, {props.firstName} </h1>
                <AddPost {...props}/>
                    {feedData && feedData.map((feedData) => (
                        <article>
                            <h3>{feedData.owner}</h3>
                            <p>{feedData.status}</p>
                            <p>{feedData.time}</p>

                        </article>
                    ))}
                </section>
            )}

        </div>
        </>
    )
}

export default Home

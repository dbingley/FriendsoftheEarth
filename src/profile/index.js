import React, { useState, useEffect } from 'react'
import image from './profile.png';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from '../Components/navbar.js';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import firebase from 'firebase';

const Profile = (props) => {
    const [userData, setUserData] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        window.db.collection("/user-data").get().then((querySnapshot) => {
            let userData = []
            querySnapshot.forEach((doc) => {
                let user = doc.data()


                if ((user.firstName == props.firstName) && (user.lastName == props.lastName)){
                userData.push(doc.data())
            }});
            setUserData(userData)
            setLoaded(true)
        });
    }, [window.db])


    return (
      <>
      <Navbar/>
        <div className="Profile">
            {!loaded && (
                    <p>Loading</p>
            )}
            {loaded && (

                <section>
                <div class="container center_div">

                    <h1>Your Profile</h1>
                    {userData && userData.map((userData)  => (
                        <article>
                        <Card style={{ width: '24rem' }}>
                          <Card.Img variant="top" src={image} />
                          <Card.Body>
                            <Card.Title>{userData.firstName + ' ' + userData.lastName}</Card.Title>
                            <Card.Text>
                              Regular user
                            </Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroupItem>Email:{userData.email} </ListGroupItem>
                            <ListGroupItem>Number: {userData.number}</ListGroupItem>
                            <ListGroupItem>Address: {userData.address}</ListGroupItem>
                          </ListGroup>
                          <Card.Body>
                            <Card.Link href="#">Edit account</Card.Link>
                          </Card.Body>
                        </Card>
                        </article>
                    ))}
                    </div>

                </section>
            )}
        </div>
        </>

    )
}
export default Profile

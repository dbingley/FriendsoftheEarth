import React, { useState, useEffect } from 'react'
import Navbar from '../navbar.js'
const Home = (props) => {

    const [tasks, setTasks] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        window.db.collection("tasks").get().then((querySnapshot) => {
            let tasks = []
            querySnapshot.forEach((doc) => {
                tasks.push(doc.data())
                console.log(`${doc.id} => ${doc.data()}`);
            });
            setTasks(tasks)
            setLoaded(true)
        });
    }, [window.db])

    return (
      <>
      <Navbar/>
        <div className="Home">
            {!loaded && (
                <p>Loading</p>
            )}
            {loaded && (
                <section>
                    <h1>Welcome to Task Tracker</h1>
                    {tasks && tasks.map((task) => (
                        <article>
                            <h2>{task.name}</h2>
                            <p>{task.description}</p>
                        </article>
                    ))}
                </section>
            )}

        </div>
        </>
    )
}

export default Home

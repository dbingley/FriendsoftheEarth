import React from 'react'
import { Formik }  from 'formik'
//import withFirebase from '../database/with-firebase';
const AddTask = (props) => {

    const submitToFirebase = (formValues) => {
        // add the fields to firebase
        // redirect the user to the homepage
        console.log(formValues)
        window.db.collection("tasks").doc(formValues.name).set(formValues);
    }




    return (
        <div className="Today">
            <h1>Add a Task</h1>
            <h1>My Form</h1>
            <Formik
                initialValues={{ name: '', description: '' }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        //alert(JSON.stringify(values, null, 2));
                        submitToFirebase(values)
                        //actions.setSubmitting(false);
                    }, 1000);
                }}
                render={props => (
                    <form onSubmit={props.handleSubmit}>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            placeholder="Name of task"
                            name="name"
                        />
                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                        <input
                            type="textarea"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.description}
                            placeholder="What's the task involve?"
                            name="description"
                        />
                        {props.errors.description && <div id="feedback">{props.errors.description}</div>}
                        <button type="submit">Submit</button>
                    </form>
                )}
            />


        </div>
    )
}

export default AddTask

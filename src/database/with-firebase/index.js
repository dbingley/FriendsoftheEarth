import React from 'react';

const withFirebase = (WrappedComponent) => {
    let withFirebaseService= (props) => {    
        return <WrappedComponent database={window.db} {...props} />
    }
    return withFirebaseService
}

export default withFirebase;
import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import AddPostForm from './addPostForm.js';


class AddPost extends Component {

    constructor( props ){
        super( props )
        this.state = { show : false };

        this.toggleDiv = this.toggleDiv.bind(this)
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }

    render() {
        return (

            <div className="App-intro">
            {console.log(this.props)}

                <br />
                <Button variant="primary" onClick={ this.toggleDiv }>Add post</Button>

                <br /><br />
                { this.state.show && <Box {...this.props}/> }
            </div>
        );
    }
}

class Box extends Component{


    render(){

        return(
            <div>

            <AddPostForm {...this.props}/>
            </div>
        )
    }
}

export default AddPost;

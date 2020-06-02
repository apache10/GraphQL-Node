import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';

// query
import {getDirectorsQuery, addDirectorMutation, getMoviesQuery} from '../queris/queries';


class AddDirector extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            age:0
        };
    }
    
    //submitForm
    // check for empty cases
    submitForm(e){
        e.preventDefault();
        this.props.addDirectorMutation({
            variables: {
                name: this.state.name,
                age: this.state.age
            },
            refetchQueries:[{ query: getDirectorsQuery }]
        });
    }

    render(){
        return(
            <form className="directorForm" id="add-director" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Director name:</label>
                    <input type="text" onChange={(e) => this.setState({name:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Age:</label>
                    <input type="text" onChange={(e) => this.setState({genre:e.target.value})}/>
                </div>
                
                <button>+</button>

            </form>
        );
    }
}
export default compose(
    graphql(addDirectorMutation,{name:"addDirectorMutation"})
    )(AddDirector);

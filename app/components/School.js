import React from 'react';
import Data from '../config/data';
import Notes from './Notes/Notes'

class School extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        let names = [];
        console.log(this.props.params);
        Data.studentsData.map(function(item) {
            names.push(item.Name)
        });
        if (names.indexOf(this.props.params.schoolname) == -1) {
            return (
                <span className="alert alert-danger">Invalid school name.</span>
            )
        }
        return (
            <div>
                <h3>{this.props.params.schoolname}</h3>
                <Notes schoolname={this.props.params.schoolname}/>
            </div>
        )
    }
}

export default School;
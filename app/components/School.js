import React from 'react'
import Data from '../config/data'
import Notes from './Notes/Notes'
import Webpack from '../../webpack.config.js'

class School extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        let names = [];
        var home = "http://localhost:" + Webpack.devServer.port;
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
                <p>
                <a href={home}><i className="glyphicon glyphicon-home"></i></a>
                </p>
            </div>
        )
    }
}

export default School;
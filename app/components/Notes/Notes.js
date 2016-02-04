import React from 'react';
import AddNote from './AddNote';
import NotesList from './NotesList';
import NoteDB from '../../config/notedb';


class Notes extends React.Component {
    constructor(){
        super();
        this.state = {
            noteDB: new NoteDB('good-student-svejk-notes')
        }
    }
    render() {
        return (
            <div>
                <AddNote noteDB={this.state.noteDB} schoolname={this.props.schoolname}/>
                <p />
                <NotesList noteDB={this.state.noteDB} schoolname={this.props.schoolname}s/>
            </div>
        )
    }
}

export default Notes;
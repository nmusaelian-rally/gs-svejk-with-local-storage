import React from 'react';

class AddNote extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setRef = this.setRef.bind(this);
        this.state = {
            note: ''
        };
    }
    setRef(ref) {
        this.note = ref;
    }
    handleSubmit() {
        var newNote = this.note.value;
        this.note.value = '';
        this.addNote(newNote);
    }
    addNote(note) {
        var noteDB = this.props.noteDB;
        noteDB.addNote(note, this.props.schoolname)
    }
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control"
                    placeholder="Add New Note" ref={this.setRef}/>
                <span className='input-group-btn'>
                     <button className="btn btn-default" type="button"
                                onClick={this.handleSubmit}>Submit</button>
                </span>
            </div>
        )
    }
}

export default AddNote;
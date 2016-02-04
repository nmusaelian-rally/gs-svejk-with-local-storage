import React from 'react';


class NotesList extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        this.props.noteDB.addSubscriber(this.dbUpdate.bind(this));
    }
    dbUpdate(noteDB) {
        this.setState({});
    }
    handleClick(index){
        console.log("click!", index);
        this.props.noteDB.deleteNote(index, this.props.schoolname);
    }
    render() {
        //var notes = this.props.noteDB[this.props.schoolname];
        var that = this;
        var notes = this.props.noteDB.getNotes(this.props.schoolname);
        var formattedNotes = notes.map(function(note,index){
            return <li className="list-group-item" key={index}>{note}
                <i className="glyphicon glyphicon-trash pull-right"
                    onMouseDown={that.handleClick.bind(that,index)}></i></li>
        });
        
        return (
            <ul className="list-group">
                {formattedNotes}
            </ul>
        )
    }
}

export default NotesList;
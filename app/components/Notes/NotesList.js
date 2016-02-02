import React from 'react';


class NotesList extends React.Component {
    constructor(){
        super();
    }
    componentWillMount() {
        this.props.noteDB.addSubscriber(this.dbUpdate.bind(this));
    }
    dbUpdate(noteDB) {
        this.setState({});
    }
    render() {
        console.log('render');
        var notes = this.props.noteDB[this.props.schoolname];
        return (
            <table className="table">
                <tbody>
                </tbody>
            </table>
        )
    }
}

export default NotesList;
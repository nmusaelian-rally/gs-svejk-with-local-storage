import React from 'react';
import StudentsTable from './StudentsTable';


class Students extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div>
                <StudentsTable
                    studentsData={this.props.studentsData}
                    filterText={this.props.filterText}
                    sortByEnrollment={this.props.sortByEnrollment}
                />
            </div>
        )
    }
}

export default Students;
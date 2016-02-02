import React from 'react';
import StudentsRow from './StudentsRow';


const StudentsTable = ({studentsData, filterText, sortByEnrollment}) => {

    let rows = [];
    if (sortByEnrollment) {
        console.log('sortByEnrollmentInput');
        studentsData = _.sortBy(studentsData, function(o){
            return o.Enrollment;
        });
    }
    
    studentsData.map((item) => {
        if (item.Name.indexOf(filterText) === -1) {
            return;
        }
        rows.push(<StudentsRow item={item} key={item.Name}/>);
    });

    return (
        <table className="table table-striped table-condensed table-bordered">
        <caption className="text-center"><h4>STUDENTS</h4></caption>
            <thead>
            <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Fire Safety</th>
                <th className="text-center">Enrollment</th>
                <th className="text-center">Female / Male</th>
                <th className="text-center">% International, # Countries</th>
                <th className="text-center">% Asian, White, Black, Hispanic</th>
                <th className="text-center">Students / Faculty</th>
                <th className="text-center">Highest Enrollment Majors</th>
                <th className="text-center">Computer Science Dept.</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default StudentsTable;
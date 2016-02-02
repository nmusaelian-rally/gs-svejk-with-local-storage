import React from 'react';

const StudentsRow = ({item}) => {
    return (
        <tr>
            <td><a href={"#/school/" + item.Name} target="_blank">{item.Name}</a></td>
            <td>{item.FireSafety}</td>
            <td>{item.Enrollment}</td>
            <td>{item.FemaleToMale}</td>
            <td>{item.International}</td>
            <td>{item.Race}</td>
            <td>{item.StudentsToFaculty}</td>
            <td>{item.MajorsHighestEnrollment}</td>
            <td><a href={item.CompSciDept} target="_blank">{item.Name} Link</a></td>
        </tr>
    );
};

export default StudentsRow;



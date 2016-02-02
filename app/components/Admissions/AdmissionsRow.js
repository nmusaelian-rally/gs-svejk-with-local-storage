import React from 'react';

const AdmissionsRow = ({item}) => {
    return (
        <tr>
            <td><a href={"#/school/" + item.Name} target="_blank">{item.Name}</a></td>
            <td>{item.SatMath}</td>
            <td>{item.SatReading}</td>
            <td>{item.SatWriting}</td>
            <td>{item.Act}</td>
            <td>{item.Applied}</td>
            <td>{item.Admitted}</td>
            <td>{item.Enrolled}</td>
        </tr>
    );
};

export default AdmissionsRow;



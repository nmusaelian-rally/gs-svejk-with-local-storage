import React from 'react';
import AdmissionsRow from './AdmissionsRow';


const AdmissionsTable = ({admissionsData, filterText, sortBySatMath}) => {

    let rows = [];
    if (sortBySatMath) {
        console.log('sortBySatMath', sortBySatMath);
        admissionsData = _.sortBy(admissionsData, function(o){
            return o.SatMath;
        });
        admissionsData.reverse();  //change sortBy ascending order to use descending 
    }
    admissionsData.map((item) => {
        if (item.Name.indexOf(filterText) === -1) {
            return;
        }
        rows.push(<AdmissionsRow item={item} key={item.Name}/>);
    });

    return (
        <table className="table table-striped table-condensed table-bordered">
            <caption className="text-center"><h4>ADMISSIONS</h4></caption>
            <thead>
            <tr>
                <th className="text-center">Name</th>
                <th className="text-center">SAT Math range</th>
                <th className="text-center">SAT Reading range</th>
                <th className="text-center">SAT Writing range</th>
                <th className="text-center">ACT range</th>
                <th className="text-center">Applied</th>
                <th className="text-center">% Admitted</th>
                <th className="text-center">% Enrolled</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default AdmissionsTable;
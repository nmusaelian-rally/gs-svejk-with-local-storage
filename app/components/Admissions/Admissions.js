import React from 'react';
import AdmissionsTable from './AdmissionsTable';


class Admissions extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        console.log(this.props);
        return (
            <div>
                <AdmissionsTable
                    admissionsData={this.props.admissionsData}
                    filterText={this.props.filterText}
                    sortBySatMath={this.props.sortBySatMath}
                />
            </div>
        )
    }
}

export default Admissions;
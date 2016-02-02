import React from 'react';
import CostTable from './CostTable.js';


class Cost extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div>
                <CostTable
                    costData={this.props.costData}
                    filterText={this.props.filterText}
                    sortByCost={this.props.sortByCost}
                />
            </div>
        )
    }
}

export default Cost;
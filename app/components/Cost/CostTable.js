import React from 'react';
import _ from 'lodash';
import CostRow from './CostRow';


const CostTable = ({costData, filterText, sortByCost}) => {

    let rows = [];
    if (sortByCost) {
        costData = _.sortBy(costData, function(o){
            let totalCost = o.Tuition + o.RoomBoard + o.Fees + o.Books
            console.log('total cost: ', totalCost);
            return totalCost;
        });
    }

    costData.map((item) => {
        if (item.Name.indexOf(filterText) === -1) {
            return;
        }
        
        rows.push(<CostRow item={item} key={item.Name}/>);
    });

    return (
        <table className="table table-striped table-condensed table-bordered">
        <caption className="text-center"><h4>COST</h4></caption>
            <thead>
            <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Tuition</th>
                <th className="text-center">Room & Board</th>
                <th className="text-center">Fees</th>
                <th className="text-center">Books</th>
                <th className="text-center">% Undergrads received <br /> Need-Based aid</th>
                <th className="text-center">% Undergrads received <br /> Non Need-Based aid</th>
                <th className="text-center">% Undergrads received <br /> Need-Based Self Help aid</th>
                <th className="text-center">% of Undergrads <br /> that borrow</th>
                <th className="text-center">Avg Cumulative Debt</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default CostTable;
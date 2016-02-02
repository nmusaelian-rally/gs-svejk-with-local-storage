import React from 'react';

const CostRow = ({item}) => {
    return (
        <tr>
            <td><a href={"#/school/" + item.Name} target="_blank">{item.Name}</a></td>
            <td>{item.Tuition}</td>
            <td>{item.RoomBoard}</td>
            <td>{item.Fees}</td>
            <td>{item.Books}</td>
            <td>{item.NeedBasedAid}</td>
            <td>{item.NonNeedBasedAid}</td>
            <td>{item.NeedBasedSelfHelpAid}</td>
            <td>{item.UndergradsThatBorrow}</td>
            <td>{item.AvgCumulativeDebt}</td>
        </tr>
    );
};

export default CostRow;



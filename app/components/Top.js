//import React from 'react';
//
//
//class Top extends React.Component {
//    constructor(){
//        super();
//        this.state = {
//            data: [
//                {name: 'Stanford'},
//                {name: 'Princenton'}
//            ]
//        }
//    }
//    
//    render(){
//        let rows = [];
//        this.state.data.map((item) => {
//            rows.push(<li>{item.name}</li>);
//    });
//        return (
//            <div>
//                TOP...
//                <ul>
//                    {rows}
//                </ul>
//            </div>
//        )
//    }
//}
//
//export default Top;

import React from 'react';
import Admissions from './Admissions/Admissions';
import Cost from './Cost/Cost';
import Students from './Students/Students';
import Search from './Search/Search';
import Data from '../config/data';
import NoteDB from '../config/notedb';


class Top extends React.Component {
    constructor(){
        super();
        
        this.handleUserInput = this.handleUserInput.bind(this);
        
        this.state = {
            admissionsData: Data.admissionsData,
            costData: Data.costData,
            studentsData: Data.studentsData,
            filterText: '',
            sortByCost: false,
            sortBySatMath: false,
            sortByEnrollment: false,
        };
        
    }
    
    handleUserInput(filterText, sortByCost, sortBySatMath, sortByEnrollment){
        this.setState({
            filterText: filterText,
            sortByCost: sortByCost,
            sortBySatMath: sortBySatMath,
            sortByEnrollment: sortByEnrollment
        });
    }
    
    render(){
        return (
            <div>
                <Search
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput}
                />
                <Admissions
                    admissionsData={this.state.admissionsData}
                    filterText={this.state.filterText}
                    sortBySatMath={this.state.sortBySatMath}
                    onUserInput={this.handleUserInput} 
                />
                <Cost
                    costData={this.state.costData}
                    filterText={this.state.filterText}
                    sortByCost={this.state.sortByCost}
                    onUserInput={this.handleUserInput}
                />
                <Students
                    studentsData={this.state.studentsData}
                    filterText={this.state.filterText}
                    sortByEnrollment={this.state.sortByEnrollment}
                    onUserInput={this.handleUserInput}
                />
            </div>
        )
    }
}

export default Top;
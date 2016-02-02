import React from 'react';

class Search extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(){
        let filterText = this.refs.filterTextInput.value;
        let sortByCost = this.refs.sortByCostInput.checked;
        let sortBySatMath = this.refs.sortBySatMathInput.checked;
        let sortByEnrollment = this.refs.sortByEnrollmentInput.checked;
        this.props.onUserInput(filterText, sortByCost, sortBySatMath, sortByEnrollment);
    }

    render(){
        return (
            <div className="col-sm-10">
                <form className="form-horizontal col-sm-4">
                    <div className="form-group">
                        <input
                            type="text" className="form-control col-sm-1"
                            placeholder="Filter schools by name"
                            value={this.props.filterText}
                            ref="filterTextInput"
                            onChange={this.handleChange}
                        />
                    </div>
                    <input
                    type="checkbox"
                    checked={this.props.sortByCost}
                    ref="sortByCostInput"
                    onChange={this.handleChange}
                />
                {' '}
                Sort Cost table by Cost (Tuition + Fees + R&B + Books)
                <p />
                <input
                    type="checkbox"
                    checked={this.props.sortBySatMath}
                    ref="sortBySatMathInput"
                    onChange={this.handleChange}
                />
                {' '}
                Sort Admissions table by Freshmen SAT Math
                <p />
                <input
                    type="checkbox"
                    checked={this.props.sortByEnrollment}
                    ref="sortByEnrollmentInput"
                    onChange={this.handleChange}
                />
                {' '}
                Sort Students table by Enrollment
                </form>
            </div>
        )
    }
}
export default Search;
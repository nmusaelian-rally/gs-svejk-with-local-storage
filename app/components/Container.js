import React from 'react';


class Container extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div style={{padding: 16}}>
                <h2 style={{paddingBottom: 16}}>GOOD STUDENT SVEJK</h2>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Container;
import React from 'react';


class Container extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div style={{padding: 16}}>
                <h4 style={{paddingBottom: 16}}>GOOD STUDENT SVEJK</h4>
                <div><img src={require('../resources/svejk.png')} className="img-circle" height="100"/></div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Container;
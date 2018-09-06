import React, { Component } from 'react';

class Age extends Component {
    render () {
        const { onClick } = this.props;
        
        return (
            <button className="btn btn-primary age" name="age" onClick={onClick}>Age</button>
        )
    }
}

export default Age;

import React, { Component } from 'react';

class Points extends Component {
    render () {
        const { onClick } = this.props;
        
        return (
            <button className="btn btn-primary points" name="points" onClick={onClick}>Points</button>
        )
    }
}

export default Points;

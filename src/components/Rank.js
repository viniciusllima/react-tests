import React, { Component } from 'react';

class Rank extends Component {
    render () {
        const { onClick } = this.props;
        
        return (
            <button className="btn btn-primary rank" name="rank" onClick={onClick}>Rank</button>
        )
    }
}

export default Rank;

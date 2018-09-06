import React, { Component } from 'react';

class Name extends Component {
    render () {
        const { onClick } = this.props;
        
        return (
            <button className="btn btn-primary name" name="name" onClick={onClick}>Name</button>
        )
    }
}

export default Name;
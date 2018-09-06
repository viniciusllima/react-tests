import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
        
	}

    

    componentWillReceiveProps (newProps) {
        switch(newProps.tableState) {
            case 'age':
                this.compareByAge()
                break;
            case 'name':
                this.compareByName()
                break;
            case 'points':
                this.compareByPoints()
                break;
            case 'rank':
                this.compareByRank()
                break;
            default:
                this.compareByRank()
        }
    }
	

    // complete the comparators
	compareByAge(a, b) {
		this.setState(prevState => {
            this.state.users.sort((a, b) => (a.age - b.age))
        });
	}

	compareByName(a, b) {
	    this.setState(prevState => {
            this.state.users.sort((a, b) => (a.name.localeCompare(b.name)))
        });
	}

	compareByPoints(a, b) {
		this.setState(prevState => {
            this.state.users.sort((a, b) => (a.points - b.points))
        });
	}

	compareByRank(a, b) {
		this.setState(prevState => {
            this.state.users.sort((a, b) => (a.rank - b.rank))
        });
	}

	render() {
 
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
					    <th>Age</th>
					    <th>Name</th>
					    <th>Points</th>
					    <th>Rank</th>
					</tr>
				</thead>
				<tbody>
				{this.state.users.map(function (item, key) {
                  return (
                    <tr key={key}>
                        <td>{item.age}</td>
                        <td>{item.name}</td>
                        <td>{item.points}</td>
                        <td>{item.rank}</td>
                    </tr>
                  )
                })}
				</tbody>
			</table>
		</div>)
	}
}

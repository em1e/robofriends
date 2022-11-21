import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './components/SearchBox.css'
import Scroll from './components/Scroll.js';


class App extends Component {
	constructor() {
		console.log('constructor');
		super();
		this.state = {
				robots: [],
				searchfield: ''
		}
	}

	componentDidMount() {
        console.log('component did mount');
        fetch('https://jsonplaceholder.typicode.com/users')
        	.then(response=> response.json())
			.then(users => this.setState({ robots: users}));
    }

	onSearchChange = (event) => {
		console.log('onSearchChange')
		this.setState({ searchfield: event.target.value })
	}

 render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='textCenter'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/><br></br>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}
export default App;




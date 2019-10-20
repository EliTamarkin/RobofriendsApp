import React from "react";
import SearchBox from "../components/SearchBox.jsx";
import CardList from "../components/CardList.jsx";
import "./App.css";
import Scroll from "../components/Scroll.jsx";

class App extends React.Component{
constructor(){
    super();
    this.state ={
        robots: [],
        searchfield: ""
    }
}
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({
        robots: users
    }))
}
 onSearchBarChange = (event) => {
    this.setState({
        searchfield : event.target.value
    })
}
render(){
    const matchingRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox barChange = {this.onSearchBarChange} />
            <br />
            <Scroll>
            <CardList robots = {matchingRobots} />
            </Scroll>
        </div>

    )
}
}






export default App;
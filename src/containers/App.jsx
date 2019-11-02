import React from "react";
import SearchBox from "../components/SearchBox.jsx";
import CardList from "../components/CardList.jsx";
import Scroll from "../components/Scroll.jsx";
import ErrorBoundry from "../components/ErrorBoundry.jsx";
import "./App.css";

import {connect} from "react-redux";
import {setSearchField, requestRobots} from "../actions.js";

const mapStateToProps = (state) => {
    return {
        searchField : state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRobotsRequest: () => dispatch(requestRobots())
    }
}

class App extends React.Component{

componentDidMount(){
 this.props.onRobotsRequest();
}

render(){
    const {searchField, isPending, robots, onSearchChange} = this.props;
    const matchingRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ?
    <h1>Loading...</h1> :
    (
        <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox barChange = {onSearchChange} />
            <br />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots = {matchingRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>

    )
}
}






export default connect(mapStateToProps, mapDispatchToProps)(App);
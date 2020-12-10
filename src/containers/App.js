import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField } from '../actions';

function App() {
    const searchfield = useSelector( state => state.searchField)
    const dispatch = useDispatch()

    const [robots, setRobots] = useState([]); // ? DELETE... 

    const onSearchChange = (event) => dispatch(setSearchField(event.target.value));

    const filteredRobots = robots.filter((robot) => {
        return robot.name
            .toLocaleLowerCase()
            .includes(searchfield.toLocaleLowerCase());
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                setRobots(users);
            });
    }, []);

    return !robots.length ? (
        <h1 className="tc">Loading...</h1>
    ) : (
        <div className="tc">
            <h1 className="f1">ROBOFRIENDS</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}

export default App;

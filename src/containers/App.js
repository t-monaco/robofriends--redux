import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// ---- Components
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
// ----

// ---- Styles
import './App.css';
// ----

// ---- Actions
import { requestRobots, setSearchField } from '../actions';
// ----

function App() {
    const searchfield = useSelector((state) => state.searchRobots.searchField);
    const robots = useSelector((state) => state.requestRobots.robots);
    const isPending = useSelector((state) => state.requestRobots.isPending);
    const error = useSelector((state) => state.requestRobots.error);

    const dispatch = useDispatch();

    const onSearchChange = (event) =>
        dispatch(setSearchField(event.target.value));

    const filteredRobots = robots.filter((robot) => {
        return robot.name
            .toLocaleLowerCase()
            .includes(searchfield.toLocaleLowerCase());
    });

    useEffect(() => {
        const onRequestRobots = () => dispatch(requestRobots());
        onRequestRobots();
    }, [dispatch]);

    if (!error) {
        return isPending ? (
            <h1 className="tc">Loading...</h1>
        ) : (
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    } else {
        return <h1 className="tc">Ooops, something went wrong.</h1>;
    }
}

export default App;

import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dropdown from './components/Dropdown';
import './App.css';

function App() {
  let data = [
    {id: 1, value: "India"},
    {id: 2, value: "Maldives"},
    {id: 3, value: "Belgium"},
    {id: 4, value: "Sweden"},
    {id: 5, value: "Chile"},
    {id: 6, value: "Poland"},
    {id: 7, value: "Belarus"},
    {id: 8, value: "Egypt"},
    {id: 9, value: "Iceland"}
  ];
  return (
    <div className="App">
      <Router>
            <Switch>
                <Route path="/singleselect" component={props => <Dropdown {...props} data = {data} />}></Route>
                <Route path="/" component={props => <Dropdown {...props} data = {data} multiSelect/>}></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

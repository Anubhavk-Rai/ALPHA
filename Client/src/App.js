import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/courses" exact component={Courses} />
                <Route path="/courses/:id" component={CourseDetail} />
                <Route path="/admin" component={AdminPanel} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import List from './components/list';
import Footer from './components/footer';
import {getPort} from "./actions/actions";
import {connect} from 'react-redux';

class App extends Component {
    componentWillMount(){
        this.props.getPort();
    }

    render() {
        return (
            <div className="App">
                <Header></Header>
                <List></List>
                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPort() {
            dispatch(getPort());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

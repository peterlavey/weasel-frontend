import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import List from './components/list/list';
import Footer from './components/footer/footer';
import CreateFolder from './components/createFolder/createFolder';
import CreateRest from './components/createRest/createRest';

import {getPort} from './actions/actions';
import {connect} from 'react-redux';

class App extends Component {
    componentWillMount(){
        this.props.getPort();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <List/>
                <Footer/>

                <CreateFolder/>
                <CreateRest/>
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

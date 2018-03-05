import React, {Component} from 'react';
import {connect} from 'react-redux';
import Folder from './folder';
import Rest from './rest';
import Group from './group';
import Tutorial from './tutorial';
import {getFolders} from '../actions/actions';

class List extends Component {
    componentWillMount() {
        //this.props.getFolders();
    }

    render() {
        return (
            <div className="container mx-auto mt-5">
                <Folder></Folder>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        folders: state.folders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        test() {

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Folder from '../folder/folder';
import Rest from '../rest/rest';
import Group from '../group/group';
import Tutorial from '../tutorial/tutorial';
import {getFolder} from '../../actions/actions';
import './list.css';

class List extends Component {
    componentWillMount() {
        this.props.getFolder();
    }

    render() {
        return (
            <div className="container mx-auto mt-5">
                <Folder folders={this.props.folder.folders}></Folder>
                <Rest rests={this.props.folder.content}></Rest>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        folder: state.folder
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getFolder() {
            dispatch(getFolder());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
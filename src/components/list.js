import React from 'react';
import {connect} from 'react-redux';
import Folder from './folder';

const List = ()=> {
    return (
        <div className="container mx-auto" hidden="folder">
            <Folder></Folder>
            <Rest></Rest>
            <Group></Group>
            <Tutorial></Tutorial>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        folders: [1,2,3]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        test() {

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFolders} from "../actions/actions";

class Folder extends Component {
    componentWillMount() {
        this.props.getFolders();
    }

    render() {
        if(!this.props.folders.length){
            return <h2>Loading...</h2>
        }

        const folderComponentList = this.props.folders.map((folder, index)=> {
            return (
                <div key={index} className="row">
                    <div className="col-md-10" onClick={()=> this.props.getFolderByName()}>
                        <h3>
                            <p>{folder.name}</p>
                        </h3>
                    </div>

                    <div className="col-md-2" align="right">
                        <i className="fa fa-pencil col-md-4 grey fa-1" onClick={()=> this.props.openEditModal()}></i>
                        <i className="fa fa-trash col-md-4 grey fa-1" onClick={()=> this.props.openConfirm()}></i>
                    </div>
                    <hr/>
                </div>
            )
        });

        return (
            <div>
                {folderComponentList}
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
        getFolderByName() {

        },
        openEditModal() {

        },
        openConfirm() {

        },
        getFolders() {
            dispatch(getFolders());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
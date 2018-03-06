import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFolder} from "../actions/actions";

class Folder extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.folders);
        if(!this.props.folders){
            return <h1>Sin carpetas</h1>
        }

        const folderComponentList = this.props.folders.map((folder, index)=> {
            return (
                <div key={index} className="row">
                    <div className="col-md-10" onClick={()=> this.props.getFolders(folder)}>
                        <h3>
                            <p>{folder}</p>
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

    }
};

const mapDispatchToProps = dispatch => {
    return {
        openEditModal() {

        },
        openConfirm() {

        },
        getFolders(folderSelected) {
            dispatch(getFolder(folderSelected));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
import React from 'react';
import {connect} from 'react-redux';
import {getFolder} from "../actions/actions";

const Folder = ({folders, getFolders})=> {
        if(!folders){
            return <h1>Sin carpetas</h1>
        }

        const folderComponentList = folders.map((folder, index)=> {
            return (
                <div key={index} className="row">
                    <div className="col-md-10" onClick={()=> getFolders(folder)}>
                        <h3>
                            <p>{folder}</p>
                        </h3>
                    </div>

                    <div className="col-md-2" align="right">
                        <i className="fa fa-pencil col-md-4 grey fa-1" onClick={()=> this.openEditModal()}></i>
                        <i className="fa fa-trash col-md-4 grey fa-1" onClick={()=> this.openConfirm()}></i>
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
};

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
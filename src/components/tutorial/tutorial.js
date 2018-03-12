import React from 'react';
import {connect} from 'react-redux';
import './tutorial.css';

const Tutorial = ()=> {
    const folderComponentList = this.props.folders.map((folder, index)=> {
        return (
            <div key={index} className="row">
                <div className="col-md-10" onClick={()=> this.props.getFolderByName()}>
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
};

const mapStateToProps = state => {
    return {
        folders: [1,2,3]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getFolderByName() {

        },
        openEditModal() {

        },
        openConfirm() {

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tutorial);
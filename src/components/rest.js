import React from 'react';
import {connect} from 'react-redux';

const Rest = ({rests})=> {
    if(!rests){
        return <h1>Sin rests</h1>
    }

    const restComponentList = rests.map((rest, index)=> {
        if(!rest){
            return <h2>No rest</h2>
        }

        return (
            <div key={index} className="row">
                <div className="row">
                    <div className="col-md-10">
                        <div className="radio radio-info" hidden="rest.groupRadio">
                            <div className="d-inline" hidden="!isRunning">
                                <i className="['fa fa-dot-circle-o fa-1', getColorGroupRadio()]" hidden="!rest.isSelected || isRunning"></i>
                                <i className="['fa fa-circle-o fa-1', getColorGroupRadio()]" hidden="rest.isSelected || isRunning" onClick={()=> this.props.onRestChange()}></i>
                            </div>

                            <div className="d-inline" hidden="isRunning">
                                <i className="fa fa-dot-circle-o grey fa-1" hidden="!rest.isSelected"></i>
                                <i className="fa fa-circle-o grey fa-1" hidden="rest.isSelected"></i>
                            </div>
                        </div>
                        <span className="badge badge-pill badge-{{badgeState}}">{rest.status}</span>
                        <h5>&nbsp;{rest.name}</h5>
                    </div>

                    <div className="col-md-2">
                        <i className="fa fa-eye fa-1 col-md-4" onClick={()=> this.props.openJson()} className="{'grey' : !isOpen, 'text-info' : isOpen}"></i>
                        <i className="fa fa-pencil grey fa-1 col-md-4" hidden="isRunning" onClick={()=> this.props.openEditModal()}></i>
                        <i className="fa fa-times grey fa-1 col-md-3" hidden="isRunning" onClick={()=> this.props.removeRest()}></i>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p>{rest.path}</p>
                    </div>
                </div>
                JSON-FORMATTER
                <hr/>
            </div>
        )
    });

    return (
        <div>
            {restComponentList}
        </div>
    )
};

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRestChange() {

        },
        openJson() {

        },
        openEditModal() {

        },
        removeRest() {

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rest);
import React from 'react';
import {connect} from 'react-redux';
import {FOLDER_TYPE} from '../../constants/constants';
import {startServices, stopServices} from '../../actions/actions';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Port from '../port/port';
import './footer.css';

const Footer = ({type, isRunning, port, handlerServices})=> {
    return (
        <nav className="navbar fixed-bottom navbar-inverse bg-inverse">
            <div className="row">
                <div className="col-md-1 pt-2">
                    <a className="navbar-brand tooltip-ws" href="#">
                        <img src="../assets/weasel-logo-inverse.png" title="Psst! try with konami code" width="50" height="30" className="d-inline-block align-top" alt=""/>
                    </a>
                </div>

                <div className="col-md-6 pt-3">
                    <Breadcrumb></Breadcrumb>
                    <span hidden={!isRunning} className="text-info">Para navegar debe bajar los servicios</span>
                </div>

                <div className="col-md-3 pt-2">
                    <div className="row">
                        <div className="col" hidden={type !== FOLDER_TYPE.FOLDER}>
                            <i className="fa fa-folder-o fa-2x text-white tooltip-ws" aria-hidden="true" data-toggle="modal" data-target="#folderModal" hidden={isRunning}>
                                <span className="tooltiptext">New folder</span>
                            </i>
                            <i className="fa fa-folder-o fa-2x text-muted" aria-hidden="true" hidden={!isRunning}></i>
                        </div>

                        <div className="col" hidden={type !== FOLDER_TYPE.REST}>
                            <i className="fa fa-plus fa-2x text-white tooltip-ws" aria-hidden="true" data-toggle="modal" data-target="#restModal" hidden={isRunning}>
                                <span className="tooltiptext">New service rest</span>
                            </i>
                            <i className="fa fa-plus fa-2x text-muted" aria-hidden="true" hidden={!isRunning}></i>
                        </div>

                        <div className="col">
                            <Port/>
                        </div>
                    </div>
                </div>

                <div className="col-md-2 pt-2" align="center" hidden={type !== FOLDER_TYPE.REST}>
                    <i onClick={()=> handlerServices(isRunning)} className={"fa fa-power-off fa-2x " + (isRunning ? 'text-info switch-on' : 'text-danger')} aria-hidden="true"></i>
                </div>
            </div>
        </nav>
    )
};

const mapStateToProps = state => {
    return {
        type: state.type,
        isRunning: state.isRunning
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handlerServices(isRunning) {
            if(isRunning){
                dispatch(stopServices());
            }else{
                dispatch(startServices());
            }

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
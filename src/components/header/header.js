import React from 'react';
import {connect} from 'react-redux';
import {FOLDER_TYPE} from '../../constants/constants';
import './header.css';

const Header = ({folder, type, isRunning})=> {
    return (
        <header className="fixed-top ">
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <div className="row">
                    <div className="col">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand logo" href="https://weasel.herokuapp.com/">weasel</a>
                    </div>
                </div>

                <div id="searchService" className="col tooltip-ws" align="right" hidden={isRunning || type !== FOLDER_TYPE.REST}>
                    <i className="fa fa-bars fa-2x text-white" onClick={()=> this.props.openModal()}>
                        <span className="tooltiptext">Search services</span>
                    </i>
                </div>
            </nav>

            <nav className="navbar navbar-toggleable-md submenu bg-faded">
                <div className="col-md-8">
                    <h4 className="text-muted">{folder.name}</h4>
                </div>

                <div className="col-md-4" align="right" hidden={type !== FOLDER_TYPE.REST}>
                    <i className="fa fa-download" aria-hidden="true"></i>
                    <a href="#" onClick={()=> this.props.export()}>Export this Folder</a>
                </div>

                <div className="col-md-2" align="right" hidden={type !== FOLDER_TYPE.FOLDER}>
                    <input id="fileInput" type="file" hidden="true" onChange={()=> this.props.fileChanged()}/>
                    <i className="fa fa-upload" aria-hidden="true"></i>
                    <a href="#" onClick={()=> this.props.searchFile('folder')}>Import Folder</a>
                </div>

                <div className="col-md-2" align="right" hidden={type !== FOLDER_TYPE.FOLDER}>
                    <input id="fileInput" type="file" hidden="true" onChange={()=> this.props.fileChanged()}/>
                    <i className="fa fa-upload" aria-hidden="true"></i>
                    <a href="#" onClick={()=> this.props.searchFile('HAR')}>Import HAR</a>
                </div>
            </nav>
        </header>
    )
};

const mapStateToProps = state => {
    return {
        folder: state.folder,
        type: state.type,
        isRunning: state.isRunning
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openModal() {

        },
        export() {

        },
        searchFile() {

        },
        fileChanged() {

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addFolder} from '../../actions/actions';
import './createFolder.css';

class CreateFolder extends Component {
    constructor(props){
        super(props);

        this.state = {
            folder: {
                id: 0,
                name: '',
                content: [],
                folders: []
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let folder = Object.assign({}, this.state.folder);
        folder.name = event.target.value;
        this.setState({folder});
    }

    render(){
        return (
            <div onKeyDown={()=>this.props.enterKey()} className="modal fade" id="folderModal" tabIndex="-1" role="dialog" aria-labelledby="folderModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Folder</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input value={this.state.folder.name} onChange={this.handleChange} type="text" className="form-control" placeholder="My folder"/>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={()=>this.props.createFolder(this.state.folder)} type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
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
        enterKey() {
            return false;
        },
        createFolder(folder) {
            dispatch(addFolder(folder));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateFolder);
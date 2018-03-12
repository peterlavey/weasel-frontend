import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setPort} from '../../actions/actions';
import './port.css';

class Port extends Component {
    constructor(props){
        super(props);

        this.state = {
            port: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        this.setState({port: this.props.port});
    }

    handleChange(event) {
        let port = event.target.value;
        this.setState({port});
    }

    render(){
        return (
            <div>
                <i className="fa fa-cog fa-2x text-white tooltip-ws" aria-hidden="true" data-toggle="modal" data-target="#optionsModal" hidden={this.props.isRunning}>
                    <span className="tooltiptext">Change port</span>
                </i>
                <i className="fa fa-cog fa-2x text-muted" aria-hidden="true" hidden={!this.props.isRunning}/>
                <samp className="text-white">&nbsp;{this.props.port}</samp>

                <div className="modal fade" id="optionsModal" tabIndex="-1" role="dialog" aria-labelledby="optionsModal" data-backdrop="false" aria-hidden="true" onKeyDown={()=> this.props.enterKey()}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Options</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="port">Port</label>
                                    <input type="text" className="form-control" placeholder="Set port" value={this.state.port} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=> this.props.setPort(this.state.port)}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isRunning: state.isRunning,
        port: state.port
    }
};

const mapDispatchToProps = dispatch => {
    return {
        enterKey() {

        },
        setPort(port){
            dispatch(setPort(port));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Port);
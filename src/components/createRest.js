import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRest} from "../actions/actions";
import {LIST_STATUS} from "../constants/constants";

class CreateRest extends Component {
    constructor(props){
        super(props);

        this.state = {
            rest: {
                name: 'a',
                path: '/c',
                status: 200,
                response: '{"a":1}'
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let rest = Object.assign({}, this.state.rest);
        rest[event.currentTarget.name] = event.target.value;
        this.setState({rest});
    }

    render(){
        const statusHTTPComponentList = LIST_STATUS.map(status=> {
            return (
                <option value={status.code} key={status.code}>{status.code} - {status.name}</option>
            )
        });

        return (
            <div className="modal fade" id="restModal" tabIndex="-1" role="dialog" aria-labelledby="restModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Rest</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input value={this.state.rest.name} onChange={this.handleChange} name='name' className="form-control" placeholder="My rest"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="path">Path (without domain)</label>
                                <input value={this.state.rest.path} onChange={this.handleChange} name='path' className="form-control" placeholder="/list/users"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="status">Status</label>
                                <select value={this.state.rest.status} onChange={this.handleChange} name='status' className="form-control">
                                    {statusHTTPComponentList}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="response">Response</label>
                                <textarea value={this.state.rest.response} onChange={this.handleChange} name='response' className="form-control" rows="10" placeholder="{json:'example'}"/>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={()=>this.props.createRest(this.state.rest)} type="button" className="btn btn-primary" data-dismiss="modal">Create Rest</button>
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
        createRest(rest) {
            dispatch(addRest(rest));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRest);
import React from 'react';
import {connect} from 'react-redux';
import {getFolder} from '../../actions/actions';
import './breadcrumb.css';

const Breadcrumb = ({breadcrumb, navigate})=> {
    const breadcrumbComponentList = breadcrumb.map((directory, index)=>{
        return (<ol key={index}>
            <li onClick={()=> navigate(directory)}>&nbsp; > {directory} </li>
        </ol>)
    });
    return (
        <nav className="breadcrumb">
            {breadcrumbComponentList}
        </nav>
    )
};

const mapStateToProps = state => {
    return {
        breadcrumb: state.breadcrumb.reverse()
    }
};

const mapDispatchToProps = dispatch => {
    return {
        navigate(directory){
            dispatch(getFolder(directory));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb);
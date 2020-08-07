import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as LaunchListActions from '../../store/LaunchList/actions';
import './style.css';

class LaunchList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>Launch List</div>
    );
  }
}

const mapStateToProps = ( store ) => ({
  launchList: store.launchList,
});

function mapDispatchToProps(dispatch) {
    return {
      launchListActions: bindActionCreators(LaunchListActions, dispatch),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(LaunchList);

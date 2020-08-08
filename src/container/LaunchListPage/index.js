import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as LaunchListActions from '../../store/LaunchList/actions';
import LaunchList from '../../component/LaunchList/index';
import Filter from '../../component/Filter/index';
import Loader from '../../component/Loader/index'
import './style.css';

class LaunchListPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      launchList: [],
      filterObj:{
        launch_year: '',
        launch_success: '',
        land_success: '',
      },
    };
  }

  filterClicked = (filterType, value) => {
    this.setState(prevState => ({ 
      filterObj: {
        ...prevState.filterObj,
        [filterType]: prevState.filterObj[filterType] === value? '': value,
      },
    }), () => {
      this.props.launchListActions.getLaunchList(this.state.filterObj);
    });
  }

  render () {
    return (
      <div className='launch-list-container'>
        <div className='launch-list-body'>
          <div className='launch-list-title'>SpaceX Launch Programs</div>
          <div className='launch-list-content'>
            <div className='launch-list-filter'>
              <Filter 
                filterObj={this.state.filterObj}
                filterClicked={this.filterClicked}
              />
            </div>
            <div className='launch-list-cards'>
                {this.props.launchList.launchListLoading?
                <Loader />
                : <LaunchList 
                  launches={this.state.launchList}
                />}
            </div>
          </div>
          <div className='launch-list-footer'>Developer By: <span style={{ color: 'blue', fontWeight: '400' }}>Utkarsh Sanjivan</span></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.launchListActions.getLaunchList({});
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.launchList.launchListLoading &&
      !this.props.launchList.launchListLoading
    ) {
      this.setState({ launchList: this.props.launchList.launchList });
    }
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

export default  connect(mapStateToProps, mapDispatchToProps)(LaunchListPage);

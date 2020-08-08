import React from 'react';
import { Empty } from 'antd'
import './style.css';

const SpaceXCard = props => (
  <div className="spacex-card">
    {props.launchDetails.links.mission_patch?
      <img class="spacex-card-image" alt="Unavailable" src={props.launchDetails.links.mission_patch} />
      : <Empty 
        className="spacex-card-empty-image"
        description={'Image Unavailable'}
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{ width: '100%' }}
      />
    }
    <div className="spacex-card-content">
      <div className="spacex-card-name">{props.launchDetails.mission_name} #{props.launchDetails.flight_number}</div>
      <div className="spacex-card-mission-text">Mission Ids:</div>
      <div className="spacex-card-mission-list">&#123; list Mission Ids &#125;</div>
      <div style={{ display: 'flex' }}>
        <p className="spacex-card-title">Launch Year:</p>
        <p className="spacex-card-sub-title">{props.launchDetails.launch_year}</p></div>
      <div style={{ display: 'flex' }}>
        <p className="spacex-card-title">Successful Launch:</p>
        <p className="spacex-card-sub-title">{props.launchDetails.launch_success? 'true': 'false'}</p></div>
      <div style={{ display: 'flex' }}>
        <p className="spacex-card-title">Successful Landing:</p>
        <p style={{ cursor: 'pointer' }} className="spacex-card-sub-title">&#123; launch landing &#125;</p>
      </div>
    </div>
  </div>
)

export default SpaceXCard;
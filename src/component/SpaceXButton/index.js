import React from 'react';
import { Button } from 'antd';
import './style.css';

const SpaceXButton = props => (
    <Button 
        {...props}
        className={props.isSelected? 'selected-color': 'unselected-color'}
    />
)

export default SpaceXButton;
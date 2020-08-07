import React from 'react';
import SpaceXButton from './../SpaceXButton/index';
import './style.css';

const Filter = props => (
    <div className="filters-conatainer">
        <div className="filters-title">
            Filters
        </div>
        <div className="filter-type-text">Launch Year</div>
        <div style={{ gridTemplateRows: '30px 30px 30px 30px 30px 30px 30px 30px' }} className="filter-type-buttons">
            {Array(15).fill(null).map((__, index) => 
                <div className="filter-button-div">
                    <SpaceXButton 
                        isSelected={props.filterObj.launch_year === (index+2006).toString()}
                        onClick={() => props.filterClicked('launch_year', (index+2006).toString() )}
                    >
                        {index+2006}
                    </SpaceXButton>
                </div>
            )}
        </div>
        <div className="filter-type-text">Successful Launch</div>
        <div style={{ gridTemplateRows: '30px' }} className="filter-type-buttons">
            {[{ text: 'True', checkText: 'true', filterType: 'launch_success' }, { text: 'False', checkText: 'false', filterType: 'launch_success' }].map(value => 
                <div className="filter-button-div">
                    <SpaceXButton 
                        isSelected={props.filterObj.launch_success === value.checkText}
                        onClick={() => props.filterClicked(value.filterType, value.checkText)}
                    >
                        {value.text}
                    </SpaceXButton>
                </div>
            )}
        </div>
        <div className="filter-type-text">Successful Landing</div>
        <div style={{ gridTemplateRows: '30px' }} className="filter-type-buttons">
            {[{ text: 'True', checkText: 'true', filterType: 'land_success' }, { text: 'False', checkText: 'false', filterType: 'land_success' }].map(value => 
                <div className="filter-button-div">
                    <SpaceXButton 
                        isSelected={props.filterObj.land_success === value.checkText}
                        onClick={() => props.filterClicked(value.filterType, value.checkText)}
                    >
                        {value.text}
                    </SpaceXButton>
                </div>
            )}
        </div>
    </div>
)

export default Filter;
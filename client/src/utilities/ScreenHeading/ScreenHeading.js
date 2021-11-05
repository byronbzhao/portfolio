import React from 'react';
import './ScreenHeading.css'

const ScreenHeading = ({ title, subHeading }) => {
  return (
    <div className='heading-container'>
      <div className='screen-heading'>
        <span>{title}</span>
      </div>
      {subHeading ? (
        <div className='scren-sub-heading'>
          <span>{subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className='heading-seperator'>
        <div className='seperator-line'>
          <div className='seperator-blob'>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenHeading;

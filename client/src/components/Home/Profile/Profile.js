import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a
                href='https://www.instagram.com/byronbzhao'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-instagram'></i>
              </a>
              <a
                href='https://www.linkedin.com/byronbzhao'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-linkedin'></i>
              </a>
              <a
                href='https://www.github.com/byronbzhao'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-github'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              Hello, I'm <span className='highlighted-text'>Byron Zhao</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Enthusiastic Dev 😎',
                    1000,
                    'Front End Developer',
                    1000,
                    'React Dev',
                    1000,
                    'CSS Enthusiast',
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Aspiring front end developer looking to start his career!
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button onClick={() => ScrollService.scrollHandler.scrollToHireMe()} className='btn primary-btn'>Contact Me</button>
            <a href='ByronZhaoResume.pdf' download='ByronZhaoResume.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

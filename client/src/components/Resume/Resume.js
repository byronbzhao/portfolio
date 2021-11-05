import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import './Resume.css';

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: 'HTML', ratingPercentage: 90  },
    { skill: 'CSS', ratingPercentage: 85 },
    { skill: 'Responsive Design', ratingPercentage: 85 },
    { skill: 'JavaScript', ratingPercentage: 80 },
    { skill: 'React JS', ratingPercentage: 80 },
    { skill: 'React Frameworks', ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: 'Netflix Clone',
      duration: { toDate: '2021' },
      description:
        'My attempt at recreating Netflix from the login page to the signed in page, using Firebase for authentication',
      subHeading: 'Technologies Used: React JS, Firebase, Styled Components',
    },
    {
      title: 'Travel Help Application',
      duration: { toDate: '2021' },
      description:
        'Uses the Google Maps and Google Search API to locate hotels, restaurants and attractions near you!',
      subHeading:
        'Technologies Used: React JS, Styled Components, Material UI, API',
    },
    {
      title: 'Movie Database',
      duration: { toDate: '2021' },
      description:
        'An application to search the latest and hottest movies with movie details such as summary, cast, budget using MovieDatabase API',
      subHeading:
        'Technologies Used: React JS, API',
    },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={'University of Toronto'}
        subHeading={'BACHELOR OF SCIENCE [Biochemistry]'}
        fromDate={'2013'}
        toDate={'2017'}
      />

      <ResumeHeading
        heading={'Self Learning'}
        subHeading={'HTML, CSS, Javascript, React JS'}
        fromDate={'2020'}
        toDate={'Present'}
      />
      <ResumeHeading
        heading={'High School '}
        subHeading={'Markville Secondary School'}
        fromDate={'2009'}
        toDate={'2013'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'>
        <ResumeHeading
          heading={'UNIQLO'}
          subHeading={'Stock room Manager'}
          fromDate={'2018'}
          toDate={'2020'}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            I was part of the management team that opened the Markville Mall location for Uniqlo in 2018
          </span>
        </div>
        <div className='experience-description'>
          <span className='resume-description-text'>
            - Established the first stockroom for UNIQLO Markville and its standard operations
          </span>
          <br />
          <span className='resume-description-text'>
            - Enhanced efficiency of communication between stockroom, sales floor team and cash team by implementing and maintaining an organizational structure
          </span>
          <br />
          <span className='resume-description-text'>
            - Supervised and trained employees to daily stockroom management and meeting sales targets
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className='resume-screen-container programming-skills-container'
      key='programming-skills'
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className='resume-screen-container' key='interests'>
      <ResumeHeading
        heading='Hiking'
        description='Being in the nature lets me relax and forget momentarily of all the things that stresses me out. I find it very therapeutic'
      />
      <ResumeHeading
        heading='Music'
        description="Who doesn't love listening to music doing mundane work, or a playlist to make you focus more on your work. I do!"
      />
      <ResumeHeading
        heading='Technology'
        description='I enjoy being up to date and looking into new technologies that companies are coming out with! Learning about what future technologies that can benefit us is very exciting in my eyes.'
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt='B'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className='resume-full-container fade-in'  id={props.id || ''}>
      <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
      <div className='resume-container screen-container'>
        <div className='resume-content'>
          <div className='resume-card'>
            <div className='resume-bullets'>
              <div className='bullet-container'>
                <div className='bullet-icons'></div>
                <div className='bullets'>{getBullets()}</div>
              </div>
            </div>

            <div className='resume-bullet-details'>{getResumeScreens()}</div>
          </div>
        </div>
      </div>
      {/* <div className="footer-image">
        <img src={shape} alt="not responding" />
      </div> */}
    </div>
  );
};
export default Resume;

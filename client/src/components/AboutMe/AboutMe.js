import React from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
    "Hi! I'm Byron and thanks for stopping by. I did 4 years of undergraduate studies with a focus on biochemistry and immunology but realized that I did not like it. Though it is pity that I spent 4 years on a degree, the intangibles that I learned from it was invaluable. So I started my coding journey in 2020, due to Covid and to the fact that I wanted to change into a more fulfilling career. I began self-learning through various online material, starting with HTML5 and CSS3. After getting the basic of web development down, I moved onto JavaScript which proved to be much more difficult. Through online lessons, trial and error and lots of frustration, I got the fundamentals of JavaScript. Finally combining all three, my main focus was to be proficient in React JS to make responsive, interactive websites. As of now, I am still honing my React and JavaScript skills, as well as going into learning about more frameworks such as TypeScript and NodeJS to dive into the backend. Fun note, this portfolio was my first experience with NodeJS implemented!",    highlights: {
      bullets: [
        'HTML5, CSS3, Javascript',
        'ReactJS',
        'NPM Packages',
        'Using and requesting and implementing API',
        'Material UI framework',
        'Styled Components',
        'Interactive Front End as per the design',
      ],
      heading: 'Here are a Few Highlights:',
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className='about-me-container screen-container fade-in'
      id={props.id || ''}
    >
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Who am I?'} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button
                className='btn primary-btn'
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {' '}
                Contact Me{' '}
              </button>
              <a href='ByronZhaoResume.pdf' download='ByronZhaoResume.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper';
import './Projects.css';
import projects from '../../assets/data/projects';
import ProjectItem from './ProjectItem/ProjectItem';

SwiperCore.use([Navigation]);

const Projects = (props) => {
  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='projects-container' id={props.id || ''}>
      <ScreenHeading title={'Projects'} subHeading={'My recent'} />
      <div className='projects-all-items'>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => {
            if (index >= 10) return;
            return (
              <SwiperSlide key={project.id}>
                <ProjectItem
                  img={project.img}
                  title={project.name}
                  description={project.desc}
                  code={project.code}
                  liveServer={project.liveServer}
                  project={project.skills}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;

import netflixClone from './images/netflixclonepic.PNG'
import travelApp from './images/travelappss.PNG'
import movieApp from './images/movieappss.PNG'
import chatroomApp from './images/chatroomss.PNG'
import calculatorApp from './images/calculatorss.PNG'
import countdownApp from './images/countdownss.PNG'
import formValidateApp from './images/FormValidatess.PNG'
import githubSearchApp from './images/githubsearchss.PNG'

const projects = [
  {
    id: 1,
    name: 'Netflix Clone',
    desc: 'My attempt at recreating the Netflix website using ReactJS, styled with Styled Components as well as Firebase to store login information',
    img: netflixClone,
    code: 'https://github.com/byronbzhao/netflixclone.git',
    liveServer: 'https://reactnetflixcopy.netlify.app/',
    skills: ['ReactJS', 'Styled Components', 'Firebase'],
  },
  {
    id: 2,
    name: 'Travel Application Website',
    desc: 'An application that uses Google Map API for users to search for nearby restaurants, hotels, and attractions!',
    img: travelApp,
    code: 'https://github.com/byronbzhao',
    liveServer: 'https://travelguidehelp.netlify.app/',
    skills: ['ReactJS', 'Styled Components', 'Google Search API'],
  },
  {
    id: 3,
    name: 'Movie Database',
    desc: `Using the Movie Database API, created an application where you can search the top movies, description, it's respective cast, budget and revenue `,
    img: movieApp,
    code: 'https://github.com/byronbzhao',
    liveServer: 'https://moviesinfolink.netlify.app/',
    skills: ['ReactJS', 'API Fetching'],
  },
  {
    id: 4,
    name: "Chat Room App",
    desc: 'By using Firebase and Chatengine.io API, created a messaging application where users can log in using their Google or Facebook accounts',
    img: chatroomApp,
    code: 'https://github.com/byronbzhao/chatroom',
    liveServer: 'https://byronchatroom.netlify.app/',
    skills: ['ReactJS', 'Firebase', 'API Fetching'],
  },
  {
    id: 5,
    name: 'Calculator',
    desc: 'Created a good looking calculator app from scratch',
    img: calculatorApp,
    code: 'https://github.com/byronbzhao/calculator',
    liveServer: 'https://calc4you.netlify.app/',
    skills: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 6,
    name: 'Countdown Timer',
    desc: 'One of the first HTML, CSS, JS projects I did. A countdown app that allows your to see how long it is till a specific event!',
    img: countdownApp,
    code: 'https://github.com/byronbzhao/countdown',
    liveServer: 'https://countanythingdown.netlify.app/',
    skills: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 7,
    name: 'Form Validator',
    desc: 'A simple form validating project that has certain conditions that needs to be met such as password length and proper email',
    img: formValidateApp,
    code: 'https://github.com/byronbzhao/form-validator',
    liveServer: 'https://validateformapp.netlify.app/',
    skills: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 8,
    name: 'Github Profile Search',
    desc: 'Using Github API, this application allows you to search for any profile and see their followers and links to their most recent repositories',
    img: githubSearchApp,
    code: 'https://github.com/byronbzhao/github-profiles',
    liveServer: 'https://search4githubprofiles.netlify.app/',
    skills: ['HTML', 'CSS', 'JS'],
  },
];

export default projects;

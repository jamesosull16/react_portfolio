import escapeImg from "./assets/images/escape.jpg";
import dayplannerImg from "./assets/images/dayplannerapp.jpg";
import weatherImg from "./assets/images/weather.jpg";
import messageappImg from "./assets/images/messageapp.jpg";
import staytuned from "./assets/images/staytunedtwo.jpg";
import wellness from "./assets/images/wellnessapp.jpg";

const projects = [
  {
    id: 1,
    image: escapeImg,
    title: "Escape the House",
    description:
      "A group project where I worked collaboratively with three others to produce the application. We utilized jquery and ajax calls to hit two different APIs to return events in the searched city as well as a calendar of upcoming holidays to make planning for outings around holidays easier.",
    repoUrl: "https://github.com/jamesosull16/project_fun",
    appUrl: "https://jamesosull16.github.io/project_fun/",
  },

  {
    id: 2,
    image: dayplannerImg,
    title: "Day Planner",
    description:
      "This is a daily planner where I utilized client side storage and javascript to let the user plan out their work day an hour at a time. The time blocks are color coded to represent past, present and future.",
    repoUrl: "https://github.com/jamesosull16/dayplanner",
    appUrl: "https://jamesosull16.github.io/dayplanner/",
  },

  {
    id: 3,
    image: weatherImg,
    title: "Weather Dashboard",
    description:
      "A weather app using jquery, client side storage while making several calls to the openweather API. The application will display the current weather conditions and a five day forecast for a city the user searches for.",
    repoUrl: "https://github.com/jamesosull16/weatherdashboard",
    appUrl: "https://jamesosull16.github.io/weatherdashboard/",
  },

  {
    id: 4,
    image: messageappImg,
    title: "Whats Not App Messaging",
    description:
      "A group project, working collectively with three other bootcamp students to create a messaging web based application. A node applicartion utilizing socket.io, sequelize, mysql and handlebars, you can send messages and filter by users to see what a specific person said. Some future development could include separate chat rooms, user authentication and the support of giphys. Enjoy!",
    repoUrl: "https://github.com/jamesosull16/whatsnotapp-messaging",
    appUrl: "https://whats-not-app.herokuapp.com/",
  },

  {
    id: 5,
    image: wellness,
    title: "Wellness App",
    description:
      "A MERN stack application built as part of a team for the final project of the DU Coding Bootcamp.  Utilizing Semantic-UI for the CSS framework and many NPM packages, the goal of the web based application was to have a one stop shop for tracking all health related items, i.e weight, workouts, calorie intake etc.  A colaborative effort where I was responsible for the adding and displaying workouts, the team page and the authorization aspect, it came together and is a continued work in progress.",
    repoUrl: "https://github.com/jericfey/WellnessApp3.0",
    appUrl: "https://follaine.herokuapp.com/",
  },

  {
    id: 6,
    image: staytuned,
    title: "Project 6",
    description: "Under Construction",
    repoUrl: "https://github.com/jamesosull16",
    appUrl: "",
  },
];

export default projects;

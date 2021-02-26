import escapeImg from "./images/escape.jpg";
import dayplannerImg from "./images/dayplannerapp.jpg";
import weatherImg from "./images/weather.jpg";
import messageappImg from "./images/messageapp.png";

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
    image: "",
    title: "Project 5",
    description: "Under Construction",
    repoUrl: "",
    appUrl: "",
  },

  {
    id: 6,
    image: "",
    title: "Project 6",
    description: "Under Construction",
    repoUrl: "",
    appUrl: "",
  },
];

export default projects;

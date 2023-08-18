import portfolioImg01 from "../images/weather app.png";
import portfolioImg02 from "../images/Tik Tac Toe.png";
import portfolioImg03 from "../images/password generator.png";
import portfolioImg04 from "../images/Color Generator.png";
import portfolioImg05 from "../images/counter app.png";
import portfolioImg06 from "../images/Picsart.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Weather-App-Project",
    description:
      "Created a weather app that tracks the user's location. Included a feature that updates the user on weather changes as they travel.",
    technologies: ["Reactjs", "Tailwind css", "Node.js", "Online API"],
    siteUrl: "https://github.com/SachinSargam18/Weather-App-Project.git",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Tik-Tac-Toe-Game",
    description:
      "The tic-tac-toe game is for two players. If a given player gets three marks in a row horizontally, vertically, or diagonally, then that player wins the game.",
    technologies: ["HTML", "CSS", "JavaScript"],
    siteUrl: "https://github.com/SachinSargam18/Tik-Tak-Toe-Game-Project.git",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Ux",
    title: "Password-Generator-Project",
    description:
      "Built a website that generates secure, strong passwords with customizable features like password length and character preferences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    siteUrl: "https://github.com/SachinSargam18/Password-Generator-Project.git",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Random-Color-Generator",
    description:
      "It generats a Random color with its HEX value. any one can copy that hex code and use the color.",
      technologies: ["HTML", "CSS", "JavaScript"],
      siteUrl: "https://github.com/SachinSargam18/Random-Color-Generator-Project.git",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Counter-App",
    description:
      "I have created increment or decrement functionality with the group of increment button {plus (+) button}, decrement button {minus (-) button } and a text input field.",
    technologies: ["Reactjs", "Tailwind css"],
    siteUrl: "https://github.com/SachinSargam18/Counter-App.git",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Ux",
    title: "Food-Delivery-Page",
    description:
      "Food Delivery Page design using - HTML and CSS. Well structured with Header and Footer and all the required sections",
    technologies: ["HTML", "CSS"],
    siteUrl: "https://github.com/SachinSargam18/Food-Delivery-App.git",
  },
];

export default portfolios;

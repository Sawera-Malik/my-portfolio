import React from "react";
import TicTacToe from "../assets/tic-tac-toe.png";
import Counter from "../assets/counter.png";
import taskManagement from "../assets/taskmanagment.png";
import calculator from "../assets/calculator.png";
import stopwatch from "../assets/stop.png";
import Emoji from "../assets/emoji.png";
import './portfolio.css';
const projects = [
  {
    id: 1,
    name: "Tic Tac Toe",
    image: TicTacToe,
  },
  {
    id: 2,
    name: "Counter App",
    image: Counter,
  },
  {
    id: 3,
    name: "Task Management",
    image: taskManagement,
  },
  {
    id: 4,
    name: "Calculator",
    image: calculator,
  },
  {
    id: 5,
    name: "Stop Watch",
    image: stopwatch,
  },
  {
    id: 6,
    name: "Emoji Search",
    image: Emoji,
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="port-container">
        <div className="port-head">My Latest Work</div>
        <div className="port-sec">
          {projects.map((project) => (
            <div
              key={project.id}
              className="port-box"
            >
              <img
                src={project.image}
                alt={project.name}
                className="port-img"
              />
              <div className="port-box-name">{project.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

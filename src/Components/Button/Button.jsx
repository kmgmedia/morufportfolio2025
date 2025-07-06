import React from "react";
import "./button.scss";
import { Link } from "react-router-dom";

class Button extends React.Component {
  handleClick = (e) => {
    e.preventDefault();

    const clickedButton = e.target;
    clickedButton.classList.add("animate");

    // Delay route change until animation finishes
    setTimeout(() => {
      clickedButton.classList.remove("animate");

      // Navigate only if link prop is passed
      if (this.props.link) {
        window.location.href = this.props.link; // forces route change
      }
    }, 600);
  };

  render() {
    return (
      <button className="kmg-folio-btn" onClick={this.handleClick}>
        {this.props.label || "View Case Study"}
      </button>
    );
  }
}

export default Button;



// import React from 'react'
// import './button.scss';

// class Button extends React.Component {
//     handleClick = (e) => {
//     e.preventDefault();

//     const clickedButton = e.target;
//     clickedButton.classList.add("animate");
//     setTimeout(() => {
//         clickedButton.classList.remove("animate");
//     }, 600);
//     }

//     render() {
//     return (
//         <button className="kmg-folio-btn" onClick={this.handleClick}>
//             View Project
//         </button>
//     );
//     }
// }

// export default Button;

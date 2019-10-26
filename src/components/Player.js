import React from "react";
import PropTypes from "prop-types";
import movingMaria from "../images/moving-maria.gif";
import stillMaria from "../images/still-maria.png";
import "../styles/_Player.scss";
import variables from "./variables";

const Player = props => {
  const { direction, positionX, positionY, isMoving, isJumping } = props;
  let image = stillMaria;
  if (isMoving) {
    image = movingMaria;
  } else if (isJumping) {
    image = stillMaria;
  }
  return (
    <div
      className="Player"
      style={{
        backgroundImage: `url(${image})`,
        transform: direction === "ltr" ? "none" : "scaleX(-1)",
        left: `${positionX}px`,
        bottom: `${positionY + variables.groundHeight}px`
      }}
    />
  );
};

Player.propTypes = {
  positionX: PropTypes.number,
  positionY: PropTypes.number,
  direction: "ltr" | "rtl",
  isMoving: PropTypes.bool,
  isJumping: PropTypes.bool
};

export default Player;

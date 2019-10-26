import React from "react";
import variables from "./variables";
import "../styles/_Background.scss";
import PropTypes from "prop-types";

const Background = props => {
  const { position } = props;
  return (
    <div
      className="Background"
      style={{
        backgroundPosition: `
              left ${-(position * (variables.groundWidth / 80))}px bottom 0px,
              left ${-(position * (variables.treeWidth / 700))}px bottom ${
          variables.groundHeight
        }px,
              left ${-(position * (variables.backWidth / 1000))}px bottom 0px
            `
      }}
    ></div>
  );
};

Background.propTypes = {
  position: PropTypes.number
};

export default Background;

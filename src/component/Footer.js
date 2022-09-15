import React from "react";
import PropTypes from "prop-types";

import "./Footer.css";

export default class Footer extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-footer">
        <h1>©Jahcoto</h1>
      </div>
    );
  }
}

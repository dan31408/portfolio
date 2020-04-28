import React, { Component } from "react";
import { LANGUAGES } from '../shared/languages';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: LANGUAGES
    };
  };

  render() {
    return (
      <div className="container">
        <div className="col">
          <h4>Click on an icon below to get my knowlege base in each</h4>
        <img class="w-25" src="assets/images/html-css-js-logo.png" />
        <img class="w-25" src="assets/images/react-logo.png" />
        <img class="w-25" src="assets/images/react-native-logo.jpg" />
        <img class="w-25" src="assets/images/sass-logo.png" />
        <img class="w-25" src="assets/images/nodejs2-logo.png" />
        <img class="w-25" src="assets/images/git-logo.png" />
        <img class="w-25" src="assets/images/jsx-logo.png" />
        <img class="w-25" src="assets/images/rest-logo.png" />
        <img class="w-25" src="assets/images/json-logo.png" />
        <img class="w-25" src="assets/images/bootstrap-logo.png" />
        <img class="w-25" src="assets/images/npm-logo.png" />
      </div>
      </div>
    );
  }
}

export default Directory;
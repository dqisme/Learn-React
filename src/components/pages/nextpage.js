import React from 'react';
import { Link } from 'react-router';
import wrapPageSlider from '../pagewrappers/pageslider';

const styles = {
  backgroundColor: '#fc6',
};

class NextPage extends React.Component {
  render() {
    return (
      <div style={styles}>
        <p>
          Hi, I am NextPage.
        </p>
        <Link to="/start">StartPage</Link>
      </div>
    );
  }
}

export default wrapPageSlider(NextPage);

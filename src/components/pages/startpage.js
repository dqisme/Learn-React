import React from 'react';
import { Link } from 'react-router';
import wrapPageSlider from '../pagewrappers/pageslider';

const styles = {
  backgroundColor: '#9c9',
};

class StartPage extends React.Component {
  render() {
    return (
      <div style={styles}>
        <p>
          Hi, I am StartPage.
        </p>
        <Link to="/next">NextPage</Link>
      </div>
    );
  }
}

export default wrapPageSlider(StartPage);


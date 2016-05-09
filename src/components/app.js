import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

class App extends React.Component {
  render() {
    return (
      <ReactTransitionGroup component="div">
        {
          this.props.children && React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
          })
        }
      </ReactTransitionGroup>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  location: React.PropTypes.object.isRequired,
};

export default App;

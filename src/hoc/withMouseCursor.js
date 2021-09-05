import React from 'react';

const withMouseCursor = (Component) => {
  class Hoc extends React.Component {
    state = {
      x: 0,
      y: 0,
    };

    componentDidMount() {
      document.body.addEventListener(
        'mousemove',
        this.updateMouseCursor.bind(this)
      );
    }

    updateMouseCursor(e) {
      this.setState({
        x: e.pageX,
        y: e.pageY,
      });
    }
    render() {
      return (
        <Component
          mouseX={this.state.x}
          mouseY={this.state.y}
          {...this.props}
        />
      );
    }
  }
  return Hoc;
};

export default withMouseCursor;

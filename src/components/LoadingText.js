import React from 'react';

export default class LoadingText extends React.Component {
  waitTimeout = null;

  state = {
    text: null
  };

  componentDidMount() {
    this.waitTimeout = setTimeout(() => {
      this.setState({
        text: this.props.text || 'Loading...'
      });
    }, this.props.showAfter || 250);
  }

  componentWillUnmount() {
    clearTimeout(this.waitTimeout);
  }

  render() {
    if (!this.state.text) {
      return null;
    }

    return (
      <p {...this.props} style={{ textAlign: 'center' }}>
        { this.props.children ? this.props.children : this.state.text }
      </p>
    );
  }
}

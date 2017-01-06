import React from 'react';
import { connect } from 'react-redux';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Counter</div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Container);

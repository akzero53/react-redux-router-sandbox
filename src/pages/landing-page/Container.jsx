import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Landing Page</div>
        <button onClick={ () => { this.props.dispatch(push('/counter')) } }>counter</button>
        <button onClick={ () => { this.props.dispatch(push('/memo')) } }>memo</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Container);

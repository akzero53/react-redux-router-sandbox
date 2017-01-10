import React from 'react';
import { connect } from 'react-redux';

import Header from 'common/components/Header';
import Footer from 'common/components/Footer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Layout);

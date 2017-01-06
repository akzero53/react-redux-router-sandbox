import React from 'react';
import { connect } from 'react-redux';

import * as memoActionCreators from 'actions/creators/memo';
import MemoCreator from 'components/MemoCreator';
import MemoList from 'components/MemoList';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MemoCreator createMemo={() => { this.props.dispatch(memoActionCreators.createMemo()) }} />
        <MemoList memos={this.props.memoReducer.memos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Application);

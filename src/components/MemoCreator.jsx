import React from 'react';

export default class MemoCreator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.createMemo}>Create Memo</button>
      </div>
    )
  }
}

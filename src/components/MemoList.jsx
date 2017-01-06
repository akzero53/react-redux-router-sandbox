import React from 'react';
import { connect } from 'react-redux';

export default class MemoList extends React.Component {
  constructor(props) {
    super(props);
  }

  _listMemo() {
    if (this.props.memos.length == 0) {
      return <div>No Content</div>;
    }
    return this.props.memos.map((memo, index) => {
      return (
        <div key={index} style={{ border: 'solid black 1px', margin: '1 1 1 1', padding: '1 1 1 1', borderRadius: '5px' }}>
          <div>Title: {memo.title}</div>
          <div>Content: {memo.content}</div>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <div>Memos:</div>
        <div>{this._listMemo()}</div>
      </div>
    );
  }
}

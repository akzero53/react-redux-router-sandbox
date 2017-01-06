import * as memoActionTypes from 'actions/types/memo';

const initialState = {
  memos: [],
  selectedMemo: null,
};

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case memoActionTypes.CREATE_MEMO:
      const nextState = Object.assign({}, state);
      nextState.memos.push({
        title: action.title,
        content: action.content,
      });
      return nextState;
    default:
      return state;
  }
};

export default entryReducer;

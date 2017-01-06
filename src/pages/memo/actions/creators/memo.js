import * as actionTypes from 'pages/memo/actions/types/memo.js';

export const createMemo = () => {
  return {
    type: actionTypes.CREATE_MEMO,
    title: '',
    content: '',
  };
};

export const selectMemo = (title) => {
  return {
    type: actionTypes.SELECT_MEMO,
    title: title,
  };
};

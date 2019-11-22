import { List } from 'immutable';

export default {
  namespace: 'home',
  state: {
    list: List([
      {
        name: 'hewei0',
        props: {
          id: 0,
        },
      },
    ]),
  },
  reducers: {
    update(state, { payload: item }) {
      return { ...state, list: state.list.push(item) };
    },
  },
};

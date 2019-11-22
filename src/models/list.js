import { List } from 'immutable';

let id = 0;
export default {
  namespace: 'list',
  state: List([
    {
      name: 'hewei',
      props: {
        id,
      },
    },
  ]),
  reducers: {
    add(state, { payload: item }) {
      return state.push(item);
    },
    delete(state, { payload: index }) {
      return state.delete(index);
    },
  },
};

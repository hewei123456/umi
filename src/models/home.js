import { List } from 'immutable';

export default {
  namespace: 'home',
  state: {
    results: List([
      {
        name: 'hewei0',
        props: {
          id: 0,
        },
      },
    ]),
  },
  reducers: {
    update(state, { payload: obj }) {
      let { results } = state;
      results = results.push(obj);
      return { ...state, results };
    },
  },
};

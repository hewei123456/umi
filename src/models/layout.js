export default {
  namespace: 'layout',
  state: {
    showLeft: true,
  },
  reducers: {
    toggle(state) {
      return { ...state, showLeft: !state.showLeft };
    },
  },
};

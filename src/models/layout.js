export default {
  namespace: 'admin',
  state: {
    showLeft: true,
  },
  reducers: {
    toggle(state) {
      const bool = state.showLeft;
      return { ...state, showLeft: !bool };
    },
  },
};

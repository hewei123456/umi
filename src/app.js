import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage/session';
import immutableTransform from 'redux-persist-transform-immutable';

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'model',
  storage,
};
const persistEnhancer = () => createStore => (reducer, initialState, enhancer) => {
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer);
  const persist = persistStore(store);
  return { ...store, persist };
};

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    // extraEnhancers: [
    //   persistEnhancer(),
    // ],
  },
};

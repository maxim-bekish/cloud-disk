// store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index'; // ваш корневой редуктор

const store = configureStore({
  reducer: rootReducer,
  // другие параметры, такие как middleware, devTools и т.д.
});

export default store;

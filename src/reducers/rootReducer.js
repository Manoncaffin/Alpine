
import { combineReducers } from '@reduxjs/toolkit';
import configuratorReducer from './configuratorSlice'; // Importez votre reducer pour le configurateur

const rootReducer = combineReducers({
  configurator: configuratorReducer,
  // Ajoutez d'autres reducers ici si nécessaire
});

export default rootReducer;
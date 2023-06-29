import {createStore} from 'redux';
import { tokenReducer } from './store/tokens/tokensReducer';

const store = createStore(tokenReducer);

export default store;
import { createStore } from 'redux';
import reducers from '../src/components/toh/reducers';

export const store = createStore(reducers);

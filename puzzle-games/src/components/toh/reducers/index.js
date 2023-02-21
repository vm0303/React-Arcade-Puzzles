import {combineReducers} from 'redux';
import {theModal} from './theModal';
import {theTowers} from './theTowers';
import {selectedTower} from './selectedTower';
import {theSumOfMoves} from './theSumOfMoves';
import {gameError} from './GameError';

export default combineReducers({
    theModal,
    theTowers,
    selectedTower,
    theSumOfMoves,
    gameError,
});

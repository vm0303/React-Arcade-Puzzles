import {A_New_Game, Move_Counter_Sum} from "../actions/constantValues";

export const theSumOfMoves = (state = 0, action) => {
    switch (action.type) {
        case Move_Counter_Sum:
            return action.movesNumber;
        case A_New_Game:
            return 0;
        default:
            return state;
    }
};

import {A_New_Game, Pick_Hanoi_Tower} from "../actions/constantValues";

export const selectedTower = (state = -1, action) => {
    switch (action.type) {
        case Pick_Hanoi_Tower:
            return action.id;
        case A_New_Game:
            return -1;
        default:
            return state;
    }
};

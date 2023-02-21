import {A_New_Game, Encounter_Error} from "../actions/constantValues";

export const gameError = (state = false, action) => {
    switch (action.type) {
        case Encounter_Error:
            return action.status;
        case A_New_Game:
            return false;
        default:
            return state;
    }
};

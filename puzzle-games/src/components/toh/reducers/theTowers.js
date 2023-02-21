import {A_New_Game} from "../actions/constantValues";

export const theTowers = (
    state = [
        [
            {id: 1, class: 'one'},
            {id: 2, class: 'two'},
            {id: 3, class: 'three'},
            {id: 4, class: 'four'}
        ],
        [],
        [],
    ],
    action
) => {
    switch (action.type) {
        case A_New_Game:
            return action.columns;
        default:
            return state;
    }
};

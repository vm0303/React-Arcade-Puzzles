import {close_The_Modal, Open_Winner_Modal} from "../actions/constantValues";


export const theModal = (state = null, action) => {
    switch (action.type) {
        case close_The_Modal:
            return false;
        case Open_Winner_Modal:
            return action.text;
        default:
            return state;
    }
};

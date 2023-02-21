import {
  A_New_Game,
  close_The_Modal,
  Encounter_Error,
  Move_Counter_Sum,
  Open_Winner_Modal,
  Pick_Hanoi_Tower,
} from './constantValues'

export const closingModal = () => ({
    type: close_The_Modal,
});

export const towerSelection = id => ({
    type: Pick_Hanoi_Tower,
    id,
});

export const sumOfMoves = (movesNumber) => ({
    type: Move_Counter_Sum,
    movesNumber: movesNumber + 1,
});

export const madeAnError = status => ({
    type: Encounter_Error,
    status,
});

export const restartTheGame = () => ({
    type: A_New_Game,
    columns: [
        [
            {id: 1, class: 'one'},
            {id: 2, class: 'two'},
            {id: 3, class: 'three'},
            {id: 4, class: 'four'}
        ],
        [],
        [],
    ],
});

export const showWinnerMessage = () => ({
    type: Open_Winner_Modal,
    text: 'Congratulations, you won! ' +
        'Click or tap anywhere inside the modal to close.',

});

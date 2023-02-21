import React from 'react';
import {connect} from 'react-redux';
import {closingModal, madeAnError, restartTheGame, showWinnerMessage, sumOfMoves, towerSelection,} from './actions';
import './hanoi.css';

const Hanoi = ({
                 theModal,
                 theTowers,
                 selectedTower,
                 theSumOfMoves,
                 gameError,
                 ...props
             }) => {
    const canMoveDisk = (fromColumn, toColumn) => {
        const fromTopDisk = fromColumn.length > 0 ? fromColumn[0] : false;
        const toTopDisk = toColumn.length > 0 ? toColumn[0] : false;

        if (fromTopDisk) {
            if (toTopDisk && toTopDisk.id > fromTopDisk.id) {
                props.incrementMovesCounter(theSumOfMoves);
                return true;
            }


            if (toTopDisk && toTopDisk.id < fromTopDisk.id) {
                props.didWrongMove("ERROR: You tried to place a big tile on top of small tile. ");
                return false;
            }
            if (toTopDisk.id) {
                props.didWrongMove("ERROR: The tile you want to move already exists in that tower.");
                return false;
            }

            props.incrementMovesCounter(theSumOfMoves);
            return true;
        }

        props.didWrongMove('ERROR: The tower you selected is empty.');
        return false;

    };

    const handleColumnClick = (id) => {
        if (selectedTower < 0) {
            props.selectColumn(id);
        } else {
            const fromColumn = theTowers[selectedTower];
            const toColumn = theTowers[id];

            if (canMoveDisk(fromColumn, toColumn)) {
                props.didWrongMove(false);
                const disk = fromColumn.shift();
                toColumn.unshift(disk);

                if (theTowers[0].length === 0 && theTowers[1].length === 0) {
                    props.showPopupVictory();
                }
            }

            props.selectColumn(-1);
        }
    };

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <h1 className="hanoi-title">Towers Of Hanoi</h1>
            <div className="directions">
                <p>
                    <span className="text-title">Objective:</span> Move all the tiles from the left-most tower to the
                    right-most tower.
                    See if you can do this by not using too many moves.
                </p>

                <p>
                    <span className="text-title">Directions:</span> Click or tap on a tower, which is represented as the
                    blue vertical rectangle boxes down below.

                </p>
                <p>
                    The tower will flash <span className="red-text"> red</span> and <span
                    className="blue-text"> blue</span> to indicate that you have selected that particular tower.
                </p>
                <p>
                    Click or tap on any other towers to place the tile you want to move around.
                </p>
                <p>
                    When all the tiles have been moved to the right-most tower, you win!
                </p>


                <p className="warning">
                    <span className="text-title-warning">NOTE:</span> Please keep in mind that bigger tiles CANNOT be
                    stacked on smaller tiles.
                </p>
                <p>
                    Good luck and have fun!
                </p>
                <div className="the-Hanoi-Content">
                    <div className="theButton">
                        <button title="Click this button to start a new game" type="button" className="btn btn-primary"
                                onClick={refreshPage}>New Game
                        </button>
                    </div>

                    <div  className={`theModal ${theModal ? 'on' : 'off'}`}>
                        <span title="Click here to close the modal." className="text" onClick={props.closePopup}>{theModal}</span>
                    </div>
                    <div className="movesCounter infoBox" title="This counts the number of moves you used
         to move the tiles from tower to tower.">{`Number of moves used: ${theSumOfMoves}`}</div>
                    <div className={`wrongMove infoBox ${gameError ? 'on' : 'off'}`}>
                        {gameError}
                    </div>
                </div>
            </div>
            <main>

                {theTowers.map((t, ti) => (
                    <div
                        key={ti}
                        title="These blue vertical rectangle boxes represent the towers of Hanoi. "
                        onClick={() => {
                            handleColumnClick(ti);
                        }}
                        className={`theTile ${selectedTower === ti ? 'selected' : ''}`}
                    >

                        {t.map(b => (
                            <div title="These small numbered rectangle boxes represent the tiles." className={b.class}
                                 key={b.id}>{b.id} </div>
                        ))}
                    </div>
                ))}

            </main>
            <br/>



        </>
    );
};

const mapStateToProps = state => ({
    theModal: state.theModal,
    theTowers: state.theTowers,
    selectedTower: state.selectedTower,
    theSumOfMoves: state.theSumOfMoves,
    gameError: state.gameError,
});

const mapDispatchToProps = {
    closePopup: closingModal,
    selectColumn: towerSelection,
    incrementMovesCounter: sumOfMoves,
    didWrongMove: madeAnError,
    resetGame: restartTheGame,
    showPopupVictory: showWinnerMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hanoi);

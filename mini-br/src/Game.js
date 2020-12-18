import './Game.css';
import Grid from './Grid.js';

function Game() {

    return (
        <div className="Game">
            <div className="Game-TopBar">
                <div className="GameName">
                    <div className="Name">Nom de la partie</div>
                </div>
                <div className="RightPanel">
                    <button className="ShowPlayers">Joueurs</button>
                    <button className="GoBack">Retour</button>
                </div>
            </div>
            <div className="Game-Playground">
                <Grid></Grid>
            </div>
        </div>
    );
}

export default Game;

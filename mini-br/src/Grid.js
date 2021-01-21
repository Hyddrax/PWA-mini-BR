import React from "react";
import './Grid.css';
import Cell from "./Cell.js";
import { Button } from '@material-ui/core';

class Grid extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            dataGrid: this.props.dataGrid,
            turnPlayerId: this.props.turnPlayerId,
            turnPlayer: this.props.dataGrid.data.players[this.props.turnPlayerId - 1],
            nbMoveAvailable: 9,
        }
    }

    componentDidUpdate(oldProps) {
        if (this.props != oldProps) {
            this.setState({
                dataGrid: this.props.dataGrid,
                turnPlayerId: this.props.turnPlayerId,
                turnPlayer: this.props.dataGrid.data.players[this.props.turnPlayerId - 1],
                nbMoveAvailable: 9,
                test: this.props.test
            });
        }
    }

    accessibleCellsAround(x, y, distance, existingSet) {
        if (distance == 0) {
            return existingSet;
        }
        let directions = [{ x: 0, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: -1, y: 0 }];
        if (!existingSet) {
            existingSet = new Set([]);
        }
        for (const dir of directions) {
            const target = { x: x + dir.x, y: y + dir.y };
            if (this.cellIsWalkable(target.x, target.y)) {
                if (!this.state.dataGrid.data.cells[y][x].isWalkable) {
                    this.state.dataGrid.data.cells[y][x].isWalkable = true;
                }
                existingSet.add(this.state.dataGrid.data.cells[y][x]);
                this.accessibleCellsAround(target.x, target.y, distance - 1, existingSet);
            }
        }
        return existingSet;
    }

    cellIsWalkable(x, y) {
        if (x < 0 || x >= this.state.dataGrid.data.cells[0].length || y < 0 || y >= this.state.dataGrid.data.cells.length) {
            return false;
        }
        var cell = this.state.dataGrid.data.cells[y][x];
        if (cell.isObstacle || cell.isPlayer) {
            return false;
        } else {
            return true;
        }
    }

    resetCellsAround(x, y, distance) {
        let walkableCells = this.accessibleCellsAround(x, y, distance)
        walkableCells.forEach(cell => {
            cell.isWalkable = false;
        });
    }




    calcTravelDistance(x1, y1, x2, y2) {
        let distanceX = 0;
        let distanceY = 0;
        if (x1 > x2) {
            distanceX = x1 - x2;
        } else {
            distanceX = x2 - x1;
        }
        if (y1 > y2) {
            distanceY = y1 - y2;
        } else {
            distanceY = y2 - y1;
        }
        return distanceX + distanceY;
    }

    findPlayerIndexByPosition(x, y) {
        let attackedPlayerIndex = null;
        this.state.dataGrid.data.players.forEach((player, index) => {
            if (player.position.x == x && player.position.y == y) {
                attackedPlayerIndex = index;
            }
        });
        return attackedPlayerIndex
    }

    attackPlayer(x, y) {
        let tmpDataGrid = Object.assign({}, this.state.dataGrid);
        let tmpPlayer = Object.assign({}, this.state.turnPlayer);
        let distance = this.calcTravelDistance(tmpPlayer.position.x, tmpPlayer.position.y, x, y);
        if (distance == 1) {
            let attackedPlayerIndex = this.findPlayerIndexByPosition(x, y);
            console.log("Attack Player", attackedPlayerIndex + 1);
            let attackPlayer = tmpDataGrid.data.players[attackedPlayerIndex];

            if (tmpPlayer.weapon != null) {
                console.log(`You deal ${tmpPlayer.weapon.dmg} dmg to ${attackPlayer.name}`);
                attackPlayer.health -= tmpPlayer.weapon.dmg;
            } else {
                console.log(`You don't have Weapon so you only deal 10 dmg to ${this.state.dataGrid.data.players[attackedPlayerIndex].name}`);
                attackPlayer.health -= 10;
            }

            this.setState({
                dataGrid: tmpDataGrid,
                nbMoveAvailable: 1
            }, () => {
                console.log(this.state.dataGrid.data.players);
                if (this.state.nbMoveAvailable == 1) {
                    this.props.nextPlayer();
                }
            });

        } else {
            console.log("The player is out of range !");
        }
    }

    movePlayer(newX, newY) {
        let tmpDataGrid = Object.assign({}, this.state.dataGrid);
        let tmpPlayer = Object.assign({}, this.state.turnPlayer);

        const cell = tmpDataGrid.data.cells[this.state.turnPlayer.position.y][this.state.turnPlayer.position.x];
        cell.isPlayer = false;

        this.resetCellsAround(this.state.turnPlayer.position.x, this.state.turnPlayer.position.y, this.state.nbMoveAvailable);
        let newNbMoveAvailable = this.state.nbMoveAvailable - this.calcTravelDistance(tmpPlayer.position.x, tmpPlayer.position.y, newX, newY);

        tmpPlayer.position.x = newX;
        tmpPlayer.position.y = newY;

        this.setState({
            dataGrid: tmpDataGrid,
            turnPlayer: tmpPlayer,
            nbMoveAvailable: newNbMoveAvailable
        });
        console.log(newNbMoveAvailable == 0, newNbMoveAvailable);
        if (newNbMoveAvailable == 1) {
            this.props.nextPlayer();
        }
    }

    render() {
        const copyObject = Object.assign({}, this.state.dataGrid);
        copyObject.data.players.forEach(player => {
            copyObject.data.cells[player.position.y][player.position.x].isPlayer = true;
        });
        this.accessibleCellsAround(this.state.turnPlayer.position.x, this.state.turnPlayer.position.y, this.state.nbMoveAvailable);
        const Grid = () => copyObject.data.cells.map((row, rowIndex) => {
            return <div key={rowIndex} className={`row`}>
                {
                    row.map((cell, cellIndex) => <Cell
                        key={cellIndex}
                        cellPosition={{ "x": cellIndex, "y": rowIndex }}
                        dataCell={cell}
                        movePlayer={this.movePlayer.bind(this)}
                        attackPlayer={this.attackPlayer.bind(this)} />
                    )}
            </div>
        });
        return <div className="Grid">
            <Grid />
            <div><Button onClick={this.props.updateTest}>{this.state.test}</Button></div>
        </div>

    }
}

export default Grid;

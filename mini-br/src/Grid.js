import React from "react";
import './Grid.css';
import Cell from "./Cell.js";

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataGrid: this.props.dataGrid
        }
    }

    componentDidUpdate() {
        console.log("Update");
    }

    startingPoint = { x: 20, y: 9 };

    accessibleCellsAround(x, y, distance, existingSet) {
        if (distance == 0) {
            return existingSet;
        }
        const directions = [{ x: 0, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: -1, y: 0 }];
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

    movePlayer(newX, newY) {
        let tmpDataGrid = Object.assign({}, this.state.dataGrid);

        const cell = tmpDataGrid.data.cells[this.startingPoint.y][this.startingPoint.x];
        cell.isPlayer = false;

        // tmpDataGrid.data.cells[newY][newX].isPlayer = true;
        this.setState({
            dataGrid: tmpDataGrid
        }, () => { console.log("This.state", this.state.dataGrid.data.cells[this.startingPoint.y][this.startingPoint.x]); });
    }

    initPlayer(x, y) {
        console.log("InitPlayer");
        this.state.dataGrid.data.cells[y][x].isPlayer = true;
    }

    buildGrid() {
        this.rows = this.state.dataGrid.data.cells.map((row, rowIndex) => {
            return <div key={rowIndex} className={`row`}>
                {
                    row.map((cell, cellIndex) => {
                        return <Cell key={cellIndex} cellPosition={{ "x": cellIndex, "y": rowIndex }} dataCell={cell} movePlayer={this.movePlayer.bind(this)} />;
                    })}
            </div>
        })

        this.initPlayer(this.startingPoint.x, this.startingPoint.y);
        this.accessibleCellsAround(this.startingPoint.x, this.startingPoint.y, 9);
        return this.rows;
    }

    render() {
        return (
            <div className="Grid">
                {this.buildGrid()}
            </div>
        );
    }
}

export default Grid;

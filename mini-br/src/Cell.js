import React from 'react';

import './Cell.css';


class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataCell: props.dataCell,
            cellClasses: this.initClasses(props.dataCell)
        };
    }

    initClasses(dataCell) {
        let classes = [];

        if (dataCell.isWalkable) {
            classes.push("walkable");
        }

        if (dataCell.isObstacle) {
            classes.push("obstacle");
        }

        if (dataCell.isLoot) {
            classes.push("loot");
        }

        if (dataCell.isLootWeapon) {
            classes.push("lootWeapon");
        }

        if (dataCell.isLootArmor) {
            classes.push("lootArmor");
        }

        if (dataCell.isPlayer) {
            classes.push("player");
        }

        return classes;
    }

    getClasses() {
        let classes = "";
        this.state.cellClasses.forEach(className => {
            classes += " " + className;
        });

        return classes;
    }

    clickHandler(params) {
        if (this.state.dataCell.isWalkable) {
            if (!this.state.dataCell.isPlayer) {
                this.props.movePlayer(this.props.cellPosition.x, this.props.cellPosition.y);
            } else {
                this.props.attackPlayer(this.props.cellPosition.x, this.props.cellPosition.y);
            }
        }
        console.log("you click on cell number x: " + this.props.cellPosition.x + " y: " + this.props.cellPosition.y);
    }

    render() {
        return (
            <div id={"cell"} className={this.getClasses()} onClick={() => { this.clickHandler() }} >
                {/* {props.cellValue} */}
            </div>
        );
    }
}

export default Cell;

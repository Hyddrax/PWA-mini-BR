import React from 'react';
import PlayerInfo from './Modal/PlayerInfo.js'

import './Cell.css';

class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataCell: props.dataCell,
            cellClasses: this.initClasses(props.dataCell),
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

        if (!dataCell.isLooted) {
            if (dataCell.isLoot) {
                classes.push("loot");
            }

            if (dataCell.isLootWeapon) {
                classes.push("lootWeapon");
            }

            if (dataCell.isLootArmor) {
                classes.push("lootArmor");
            }
        }
        if (dataCell.isPlayer) {
            let playerClass = "player"
            if (dataCell.playerId != null && dataCell.playerId > 0 && dataCell.playerId <= 5) {
                playerClass += dataCell.playerId;
            }
            classes.push(playerClass);
        }

        if (dataCell.isDead) {
            classes.push("deadPlayer");
        }
        if (dataCell.isActifPlayer) {
            classes.push("actifPlayer");
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

    clickHandler(e) {
        e.preventDefault();

        if (!this.state.dataCell.isPlayer) {
            if (this.state.dataCell.isWalkable) {
                let lootWeapon = false;
                let lootArmor = false;
                if ((this.state.dataCell.isLoot || this.state.dataCell.isLootWeapon || this.state.dataCell.isLootArmor) && !this.state.dataCell.isLooted) {
                    if (this.state.dataCell.isLootWeapon) {
                        lootWeapon = true
                    } else if (this.state.dataCell.isLootArmor) {
                        lootArmor = true
                    } else if (this.state.dataCell.isLoot) {
                        var min = 0;
                        var max = 100;
                        var random = Math.floor(Math.random() * (+max - +min)) + +min;
                        if (random < 50) {
                            lootWeapon = true
                        } else {
                            lootArmor = true
                        }
                    }
                }
                this.props.movePlayer(this.props.cellPosition.x, this.props.cellPosition.y, lootWeapon, lootArmor);
            }
        } else {
            this.props.attackPlayer(this.props.cellPosition.x, this.props.cellPosition.y);
        }

        console.log("You click on cell number x: " + this.props.cellPosition.x + " y: " + this.props.cellPosition.y);
    }

    rightClickHandler(params) {
        params.preventDefault();
        if (this.state.dataCell.isPlayer) {
            console.clear();
            let player = this.state.dataCell.data.player;
            console.log("============================================================");
            console.log("Name :              ", player.name);
            console.log("Health :            ", player.health);
            console.log("Position :          ", player.position);
            console.log("Mouvement restant : ", player.nbMoveAvailable);
            console.log("Armor :             ", player.armor);
            console.log("Weapon :            ", player.weapon);
            console.log("============================================================");
        }
    }

    render() {
        return (
            <div id={"cell"} className={this.getClasses()} onClick={this.clickHandler.bind(this)} onContextMenu={this.rightClickHandler.bind(this)} >
                {this.state.dataCell.playerId}
            </div>
        );
    }
}

export default Cell;

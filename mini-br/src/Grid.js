import './Grid.css';
import Cell from "./Cell.js";
import { Container } from '@material-ui/core';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { Component } from "react";


function Grid() {

    const grid = [
        [{ "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["lootWeapon"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootWeapon"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["loot"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootWeapon"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["lootArmor"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["lootWeapon"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["loot"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootWeapon"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootArmor"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootArmor"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["loot"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootWeapon"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootArmor"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootArmor"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["lootArmor"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootWeapon"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["lootWeapon"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["loot"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["loot"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootWeapon"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootArmor"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["loot"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootArmor"] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["lootWeapon"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootWeapon"] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": [""] }, { "classes": ["lootWeapon"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }],
        [{ "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }, { "classes": ["obstacle"] }],
    ]; // la cellules 23 sera la cellule ligne (2+1) et column (3+1)

    var rows = [];

    var startingPoint = { x: 20, y: 9 };

    function accessibleCellsAround(x, y, distance, existingSet) {
        if (distance == 0) {
            return existingSet;
        }
        const directions = [{ x: 0, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: -1, y: 0 }];
        if (!existingSet) {
            existingSet = new Set([]);
        }
        for (const dir of directions) {
            const target = { x: x + dir.x, y: y + dir.y };
            if (cellIsWalkable(target.x, target.y)) {

                if (!rows[y].props.children[x].props.cellClasses.includes("walkable")) {
                    rows[y].props.children[x].props.cellClasses.push("walkable");
                }
                existingSet.add(rows[y].props.children[x]);
                accessibleCellsAround(target.x, target.y, distance - 1, existingSet);
            }
        }
        return existingSet;
    }

    function cellIsWalkable(x, y) {
        if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length) {
            return false;
        }
        var cell = rows[y].props.children[x];
        if (cell.props.cellClasses.includes("obstacle") || cell.props.cellClasses.includes("player")) {
            return false;
        } else {
            return true;
        }
    }


    function initPlayer(x, y) {
        rows[y].props.children[x].props.cellClasses.push("player")
    }


    function buildGrid() {
        rows = grid.map((row, rowIndex) => {
            return <div key={rowIndex} className={`row`}>
                {
                    row.map((cell, cellIndex) => {
                        return <Cell key={cellIndex} cellValue={{ "x": cellIndex, "y": rowIndex }} cellClasses={cell.classes} />;
                    })}
            </div>
        })

        initPlayer(startingPoint.x, startingPoint.y);
        console.log(accessibleCellsAround(startingPoint.x, startingPoint.y, 9));
        return rows;
    }

    return (
        <TransformWrapper
            defaultScale={1}
            defaultPositionX={0}
            defaultPositionY={0}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                    <TransformComponent>
                        <div className="Grid">
                           <div className="tools">
                            <button onClick={zoomIn}>+</button>
                            <button onClick={zoomOut}>-</button>
                            <button onClick={resetTransform}>x</button>
                           </div>
                            {buildGrid()}
                        </div>
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    );
}

export default Grid;

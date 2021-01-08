import './Grid.css';
import Cell from "./Cell.js";

function Grid() {

    const grid = [
        [{"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["lootWeapon"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootWeapon"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["loot"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootWeapon"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["lootArmor"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["lootWeapon"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["loot"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootWeapon"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootArmor"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootArmor"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["loot"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootWeapon"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootArmor"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootArmor"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["lootArmor"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootWeapon"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["lootWeapon"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["loot"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["loot"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootWeapon"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootArmor"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["loot"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootArmor"]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["lootWeapon"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootWeapon"]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": [""]}, {"classes": ["lootWeapon"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}],
        [{"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}, {"classes": ["obstacle"]}],
    ]; // la cellules 23 sera la cellule ligne (2+1) et column (3+1)


    function buildGrid() {
        let rows = grid.map((row, rowIndex) => {
            return <div key={rowIndex} className={`row`}>
                {
                    row.map((cell, cellIndex) => {
                        return <Cell key={cellIndex} cellValue={{"x":rowIndex, "y": cellIndex}} cellClasses={cell.classes} />;
                    })}
            </div>
        })
        return rows;
    }

    



    return (
        <div className="Grid">
            {buildGrid()}
        </div>
    );
}

export default Grid;

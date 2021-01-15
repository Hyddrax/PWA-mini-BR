import React from 'react';

import './Cell.css';


function Cell(props) {

    const [cellClasses, setCellClasses] = React.useState(props.cellClasses);

    function getClasses() {
        let classes = "";
        cellClasses.forEach(className => {
            classes += " " + className;
        });
        classes += " x" + props.cellValue.x + "y" + props.cellValue.y;
        return classes;
    }

    function clickHandler(params) {
        if (cellClasses.includes("walkable") && !cellClasses.includes("player")) {
            // Call parent to remove player
            // props.removePreviousPlayerPosition(props.cellValue.x, props.cellValue.y);
            //setCellClasses([...cellClasses, "player"]);
            console.log("You can walk to this cell")
        }
        console.log("you click on cell number x: " + props.cellValue.x + " y: " + props.cellValue.y);
    }

    return (
        <div id={"cell"} className={getClasses()} onClick={clickHandler} >
            {/* {props.cellValue} */}
        </div>
    );
}

export default Cell;

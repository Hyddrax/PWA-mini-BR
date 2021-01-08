import './Cell.css';


function Cell(props) {

    function getClasses() {
        let classes = "";
        props.cellClasses.forEach(className => {
            classes += " " + className;
        });
        classes+= " x" + props.cellValue.x + "y" + props.cellValue.y;
        return classes;
    }

    function clickHandler(params) {
        alert("you click on cell number " + props.cellValue);
    }

    return (
        <div id={"cell"} className={getClasses()} onClick={clickHandler}>
            {/* {props.cellValue} */}
        </div>
    );
}

export default Cell;

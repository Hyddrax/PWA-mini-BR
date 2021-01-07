import './Cell.css';


function Cell(props) {

    function getClasses() {
        let classes = "cell";
        props.cellClasses.forEach(className => {
            classes += " " + className;
        });
        return classes;
    }

    function clickHandler(params) {
        alert("you click on cell number " + props.cellValue);
    }

    return (
        <div className={getClasses()} onClick={clickHandler}>
            {/* {props.cellValue} */}
        </div>
    );
}

export default Cell;

import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './Grid.css';

function Grid() {

    const grid = []
    const height = 25
    const width = 85
    for (let i = 0; i < height; i++) {
        const column = []
        for (let i = 0; i < width; i++) {
            column.push(i)
        }
        grid.push(column)
    }

    function buildGrid() {
        let rows = grid.map(row => {
            return <div className={`row`}>
                {row.map(cell => {
                    return <div className="cell">{cell}</div>
                })}
            </div>
        })

        return rows;

    }

    return (

        <TransformWrapper
            defaultScale={1}
            defaultPositionX={200}
            defaultPositionY={100}>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
                <div className="tools">
                <button onClick={zoomIn}>+</button>
                <button onClick={zoomOut}>-</button>
                <button onClick={resetTransform}>x</button>
                </div>
                <TransformComponent>
                <div className="Grid">
                    {buildGrid()}
                </div>
                </TransformComponent>
            </React.Fragment>
            )}
        </TransformWrapper>
        
    );
}

export default Grid;

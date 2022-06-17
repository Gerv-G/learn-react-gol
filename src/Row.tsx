import Cell from './Cell';
import range from './util';

function Row(cellCount: number) {
    return (
        <div className="board-row">
            {range(cellCount).map(Cell)}
        </div>
    )
}

export default Row;
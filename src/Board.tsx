import range from './util';
import Row from './Row';

function Board(rows: number = 3, columns: number = 3) {
    return (
        <div>
            {range(rows).map(x => Row(columns))}
        </div>
    );
}

export default Board;
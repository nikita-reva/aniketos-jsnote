import { FaArrowUp, FaArrowDown, FaTrashAlt } from 'react-icons/fa';

import './action-bar.css';
import { useActions } from '../hooks/use-actions';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="action-bar">
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, 'up')}
      >
        <FaArrowUp className="icon" />
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, 'down')}
      >
        <FaArrowDown className="icon" />
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => deleteCell(id)}
      >
        <FaTrashAlt className="icon" />
      </button>
    </div>
  );
};

export default ActionBar;

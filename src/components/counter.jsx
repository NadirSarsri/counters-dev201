function Counter({ onDelete, onIncrement, onDecrement, counter }) {
  const { value: count, id: counterId } = counter;

  const setSpanClasses = () => {
    let classes = "badge text-bg-";
    return count === 0 ? (classes += "warning") : (classes += "primary");
  };
  return (
    <div className="row mb-2 align-items-center">
      <div className="col-1">
        <span className={setSpanClasses()}>{count === 0 ? "Zero" : count}</span>
      </div>
      <div className="col">
        <button
          onClick={() => onDecrement(counterId)}
          className="btn btn-sm btn-secondary me-2"
          disabled={count === 0}
        >
          -
        </button>
        <button
          onClick={() => onIncrement(counterId)}
          className="btn btn-sm btn-secondary me-2"
        >
          +
        </button>
        <button
          onClick={() => onDelete(counterId)}
          className="btn btn-sm btn-danger me-2"
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default Counter;

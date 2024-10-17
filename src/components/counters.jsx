import Counter from "./counter";

const Counters = ({
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
  counters,
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-sm btn-primary">
        Reset
      </button>
      {counters.map((element) => (
        <Counter
          key={element.id}
          onDelete={onDelete}
          counter={element}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;

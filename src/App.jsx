import { useState } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 0 },
    { id: 3, value: 3 },
    { id: 4, value: 6 },
  ]);

  const handleIncrement = (counterId) => {
    // console.log("Incrementing");
    const copyCounters = [...counters];
    const counter = { ...copyCounters.find((c) => c.id === counterId) };
    const index = copyCounters.findIndex((c) => c.id === counterId);
    counter.value++;
    copyCounters[index] = counter;
    setCounters(copyCounters);
  };
  const handleDecrement = (counterId) => {
    // console.log("Decrementing");
    const copyCounters = [...counters];
    const counter = { ...copyCounters.find((c) => c.id === counterId) };
    const index = copyCounters.findIndex((c) => c.id === counterId);
    counter.value--;
    copyCounters[index] = counter;
    setCounters(copyCounters);
  };

  const handleDelete = (counterId) => {
    const modified = counters.filter((c) => c.id !== counterId);
    setCounters(modified);
  };
  const handleReset = () => {
    const modified = counters.map((c) => {
      return { ...c, value: 0 };
    });
    setCounters(modified);
  };

  return (
    <>
      <Navbar
        totalItems={counters.filter((counter) => counter.value > 0).length}
      />
      <main className="container pt-3">
        <Counters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
      </main>
    </>
  );
};

export default App;

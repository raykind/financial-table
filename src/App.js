import React from 'react';
import Table from "./components/table/Table";
import AddNewRowButton from "./components/add-new-row-button/AddNewRowButton";

function App() {
  return (
    <div className="container">
      <Table />
      <AddNewRowButton />
    </div>
  );
}

export default App;

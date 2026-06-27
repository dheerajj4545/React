import { useState } from "react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-blue-600 p-4 rounded text-center">
        Tailwind test
      </h1>
      <Card username="React" btnText="Click me"/>
      <Card username="JS" />
    </>
  );
}

export default App;

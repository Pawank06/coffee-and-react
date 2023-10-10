
import "./App.css";
import Card from "./components/Card";

function App() {


  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-4 rounded-xl">Tailwind test</h1>
      <Card username = "pawan" btnText="click me"/>
      <Card username = "kumar" btnText="chalo bhai"/>


      
    </>
  );
}

export default App;

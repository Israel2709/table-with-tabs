import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DataTable from "./components/dataTable";
import DataTableWrapper from "./components/dataTableWrapper";

function App() {
  const [headingText, setHeadingText] = useState("Hola!");
  const [kodersList, setKodersList] = useState(["Manu u-24"]);
  const [nameValue, setNameValue] = useState("");
  const [table2Data, setTable2Data] = useState([
    {
      first: "Israel",
      last: "Salinas",
      handle: "x",
    },
    {
      first: "Shalem",
      last: "Solis",
      handle: "x",
    },
  ]);
  console.log(headingText);

  const addKoder = () => {
    setKodersList([...kodersList, nameValue]);
  };

  const updateKoderName = (event) => {
    let value = event.target.value;
    setNameValue(value);
  };

  const filterByName = (event) => {
    console.log(event.target.value);
    let value = event.target.value;
    let result = table2Data.filter((item) =>
      item.first.toLowerCase().includes(value.toLowerCase())
    );
    setTable2Data(result);
  };

  const dataSource = [
    {
      first: "Israel",
      last: "Salinas",
      handle: "x",
    },
    {
      first: "Shalem",
      last: "Solis",
      handle: "x",
    },
  ];

  const columns = ["First", "Last", "Handle"];

  const tabs = ["tab 1", "tab 2", "tab 3"];

  return (
    <div className="App">
      <DataTableWrapper
        columns={columns}
        dataSource={table2Data}
        tabs={tabs}
        hasFilter
        filterHandler={filterByName}
      />
    </div>
  );
}

export default App;

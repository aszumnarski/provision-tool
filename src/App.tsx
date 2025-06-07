import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";
import { Form } from "./components/Form/Form";

const obj = {
  name1: "sdsds",
  name2: "ddd",
};

async function postData(url: string, body: Record<string, any>) {
  var formData = new FormData();
  formData.append("json", JSON.stringify(body));
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    //console.log(response)
    return { error };
  }
}

function App() {
  //const [d, setD] = useState(data);

  return (
    <div className="app">
      <Form rows={data.rows} />
    </div>
  );
}

export default App;

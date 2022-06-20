import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StatementForm from "./components/StatementForm";
import SubjectList from "./components/SubjectList";
import axios from "axios";

// Technically received from /api/statements
function App() {
  const [statements, setStatements] = useState([]);

  const fetchStatements = () => {
    return axios.get("/api/statements").then((res) => res.data);
  };

  const sendStatement = (subject, content) => {
    return axios.post("/api/statements", { id: statements.length, subject, content });
  };

  const addStatement = (formData) => {
    sendStatement(formData.subject, formData.content)
      .then(() => {
        setStatements([...statements, { id: statements.length, ...formData }]);
      })
      .catch(() => console.log("something went wrong"));
  };

  useEffect(() => {
    fetchStatements()
      .then((data) => setStatements(data))
      .catch((err) => {
        console.log(err);
        setStatements([]);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <StatementForm onSubmit={addStatement} />
      <SubjectList statements={statements} />
    </div>
  );
}

export default App;

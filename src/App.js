import './App.css';
import Table from './components/table'
import { useEffect, useState } from 'react';
import {getProjects} from './libs/api';

function App() {
  const [projects, setProjects] = useState([{name: '',date: ''}]);
  const colNames = ["Nombre", "Apellido"]

  useEffect(async () => {
    const projects = await getProjects();
    console.log(projects);
  }, []);

  return (
    <div className="App">
      <h1>Titulo</h1>
      <Table items={projects} colNames={colNames} />
    </div>
  );
}

export default App;

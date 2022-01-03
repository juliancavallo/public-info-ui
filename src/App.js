import {Table} from './components/table'
import {Toast} from './components/toast';
import { useEffect, useState } from 'react';
import {getProjects} from './libs/api';

function App() {
  const [projects, setProjects] = useState([]);
  const colNames = ["Proyecto", "Monto total", "Provincia", "Localidad"]

  useEffect(async () => {
    const projects = await getProjects();
    setProjects(projects);
  }, []);

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const showToastInfo = (item) => {
    setShow(true);
    setSelectedItem(item);
  }

  const closeToast = () => {
    setShow(false);
  }

  return (
    <div className="App">
      <h1>Titulo</h1>
      <Table items={projects} colNames={colNames} showToastInfo={showToastInfo} children={     
        <Toast show={show} closeToast={closeToast} item={selectedItem}></Toast>
      }>
      </Table>

    </div>
  );
}

export default App;

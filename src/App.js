import {Table} from './components/Table/table'
import {Toast} from './components/Toast/toast';
import { useEffect, useState } from 'react';
import Animation from './common/loading.gif';
import {getProjects} from './libs/api';
import {ProjectToastContent} from './components/Project/toastContent';

function App() {
  const [projects, setProjects] = useState([]);
  const columns = [
    {value: "Proyecto", width: '40%'}, 
    {value: "Monto total", width: '20%'}, 
    {value: "Provincia", width: '20%'}, 
    {value: "Localidad", width: '20%'},
  ]

  useEffect(async () => {
    setLoading(true);
    const projects = await getProjects();
    setLoading(false);
    setProjects(projects);
  }, []);

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState(false);

  const showToastInfo = (item) => {
    setShow(true);
    setSelectedItem(item);
  }

  const closeToast = () => {
    setShow(false);
  }

  const ToastContent = <ProjectToastContent item={selectedItem}/>;

  return (
    <div className="App">
      <h1>Obras Públicas</h1>
      {loading ? <img src={Animation}></img> : 
        <Table items={projects} columns={columns} showToastInfo={showToastInfo} toast={     
          <Toast show={show} closeToast={closeToast} title={selectedItem?.header?.projectName} content={ToastContent}/>
        }/>
      }

    </div>
  );
}

export default App;

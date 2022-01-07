import React, {useEffect, useState } from 'react';
import {Table} from '../components/Table/table'
import {Toast} from '../components/Toast/toast';
import {SearchFilters} from '../components/Project/searchFilters';
import Animation from '../common/images/loading.gif';
import {getProjects} from '../libs/api';
import {ProjectToastContent} from '../components/Project/toastContent';
import {HomeButton} from '../components/HomeButton/homeButton'

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const columns = [
    {value: "Proyecto", width: '40%'}, 
    {value: "Monto total", width: '20%'}, 
    {value: "Provincia", width: '20%'}, 
    {value: "Localidad", width: '20%'},
  ]

  let provinceInput = React.createRef();
  let departmentInput = React.createRef();
  let fromDateInput = React.createRef();
  let toDateInput = React.createRef();
  let minMountInput = React.createRef();
  let maxMountInput = React.createRef();
  const refs = {
    'province': provinceInput, 
    'department': departmentInput, 
    'fromDate': fromDateInput, 
    'toDate': toDateInput, 
    'minMount': minMountInput, 
    'maxMount': maxMountInput
  };

  useEffect(async () => {
    setLoading(true);
    const projects = await getProjects(null);
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

  const onSearchClick = async () => {
    const filters = {...refs};

    Object.keys(filters).map(function(key, index) {
      filters[key] = filters[key].current.value
    });

    setLoading(true);
    const projects = await getProjects(filters);
    setLoading(false);
    setProjects(projects);
  }

  const ToastContent = <ProjectToastContent project={selectedItem}/>;

  return (
    <main>
      <h1>Obras Públicas</h1>
      <HomeButton/>
      <SearchFilters refs={refs} onSearchClick={onSearchClick} />
      {loading ? <img src={Animation}></img> : 
        <Table items={projects} columns={columns} showToastInfo={showToastInfo} toast={     
          <Toast show={show} closeToast={closeToast} title={selectedItem?.header?.projectName} content={ToastContent}/>
        }/>
      }

    </main>
  );
}

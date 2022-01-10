import React, {useEffect, useState } from 'react';
import {Table} from '../components/Table/table'
import {Toast} from '../components/Toast/toast';
import {SearchFilters} from '../components/Project/searchFilters';
import {LoadingAnimation} from '../components/Animation/loading';
import {getProjects} from '../libs/api';
import {ProjectToastContent} from '../components/Project/toastContent';
import {HomeButton} from '../components/HomeButton/homeButton'
import {TableFooter} from '../components/Table/tableFooter'
import {TableHeader} from '../components/Table/tableHeader'


export default function Projects() {
  const [totalPages, setTotalPages] = useState(0);
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [pagedDataChanged, setPagedDataChanged] = useState(false);

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
  let totalAmountMinInput = React.createRef();
  let totalAmountMaxInput = React.createRef();
  let descriptionInput = React.createRef();
  const refs = {
    'province': provinceInput, 
    'department': departmentInput, 
    'fromDate': fromDateInput, 
    'toDate': toDateInput, 
    'totalAmountMin': totalAmountMinInput, 
    'totalAmountMax': totalAmountMaxInput,
    'description': descriptionInput
  };
  
  useEffect(async () => {
    const filters = {'size': size}
    loadProjects(filters);
  }, []);

  useEffect(() => {
    if(pagedDataChanged){
      loadProjects(getFilters());
      setPagedDataChanged(false);
    }
  }, [pagedDataChanged]);


  const getFilters = () => { 
    const filters = {...refs};

    Object.keys(filters).map(function(key, index) {
      filters[key] = filters[key].current.value
    });

    filters.size = size;
    filters.page = page - 1;

    return filters;
  }

  const loadProjects = async (filters) => {
    setLoading(true);
    const response = await getProjects(filters);
    setLoading(false);

    setProjects(response.items);
    setTotalPages(response.pages)

    document.querySelector('body').scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  const showToastInfo = (item) => {
    document.querySelector('body').style['overflow'] = 'hidden';
    setShow(true);
    setSelectedItem(item);
  }

  const closeToast = () => {
    document.querySelector('body').style['overflow'] = '';
    setShow(false);
  }

  const onSearchClick = async () => {
    loadProjects(getFilters());
  }

  const onPagedDataChange = (_size, _page) => {
    setSize(_size);
    setPage(_page);
    setPagedDataChanged(true);
  }
  
  const ToastContent = <ProjectToastContent project={selectedItem}/>;

  return (
    <main>
      <h1>Obras Públicas</h1>
      <HomeButton/>
      <SearchFilters refs={refs} onSearchClick={onSearchClick} />
      
      {loading ? <LoadingAnimation width={'50px'}/> : ''}
      <div className='table-wrapper'>
        <table>
          <TableHeader columns={columns}/>
          <Table 
            items={projects} 
            showToastInfo={showToastInfo} 
            toast={
              <Toast 
                show={show} 
                closeToast={closeToast} 
                title={selectedItem?.header?.projectName} 
                content={ToastContent}/>}
            />
        </table>

        <TableFooter size={size} page={page} totalPages={totalPages} onPagedDataChange={onPagedDataChange} ></TableFooter>
      </div>

    </main>
  );
}

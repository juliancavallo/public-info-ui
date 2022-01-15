import React, {useEffect, useState } from 'react';
import {Table} from '../components/Table/table'
import {Toast} from '../components/Toast/toast';
import {SearchFilters} from '../components/SearchFilter/projectSearchFilters';
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
  const [sord, setSord] = useState('asc');
  const [sidx, setSidx] = useState('');
  const [pagedDataChanged, setPagedDataChanged] = useState(false);

  const columns = [
    {key: "project", value: "Proyecto", width: '40%'}, 
    {key: "totalAmount", value: "Monto total", width: '20%'}, 
    {key: "province", value: "Provincia", width: '20%'}, 
    {key: "department", value: "Localidad", width: '20%'},
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
    const filters = {'size': size, 'sidx': 'province', 'sord': 'asc'}
    await loadProjects(filters);
  }, []);

  useEffect(async () => {
    if(pagedDataChanged){
      await loadProjects(getFilters());
      setPagedDataChanged(false);
    }
  }, [pagedDataChanged]);

  useEffect(async () => {
    if(sidx)
    await loadProjects(getFilters());
  }, [sidx, sord])


  const getFilters = () => { 
    const filters = {...refs};

    Object.keys(filters).map(function(key, index) {
      return filters[key] = filters[key].current.value
    });

    filters.size = size;
    filters.page = page;
    filters.sidx = sidx ? sidx : 'province';
    filters.sord = sord ? sord : 'asc';

    return filters;
  }

  const loadProjects = async (filters) => {
    setLoading(true);
    const response = await getProjects(filters);
    setLoading(false);

    if(response.success) {
      setProjects(response.data.items);
      setTotalPages(response.data.pages);
      if(page > response.data.pages)
        setPage(Math.max(response.data.pages, 1));

      document.getElementById('pageCounter').value = Math.max(Math.min(page, response.data.pages), 1);
      document.querySelector('body').scrollIntoView({block: 'end', behavior: 'smooth'});
    } else{
      alert(response.message);
    }
  }

  const showToastInfo = (item) => {
    document.querySelector('body').style['overflow'] = 'hidden';
    setShow(true);
    setSelectedItem(item);
  }

  const closeToast = () => {
    document.querySelector('body').style['overflow'] = '';
    document.querySelector('table').children[1].lastChild.style.visibility = 'collapse';
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

  const onTableHeaderClick = (col) =>{
    if(col === sidx){
      setSord(sord === 'asc' ? 'desc' : 'asc');
    } else {
      setSord('asc');
    }

    setSidx(col);
  }

  const ToastContent = <ProjectToastContent project={selectedItem}/>;

  return (
    <main>
      <h1>Obras Públicas</h1>
      <HomeButton/>
      <SearchFilters refs={refs} onSearchClick={onSearchClick} />
      
      {loading ? <LoadingAnimation/> : ''}
      <div className='table-wrapper'>
        <table>
          <TableHeader columns={columns} onTableHeaderClick={onTableHeaderClick} sidx={sidx} sord={sord}/>
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

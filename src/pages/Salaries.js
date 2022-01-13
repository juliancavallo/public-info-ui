import React, {useEffect, useState } from 'react';
import {Table} from '../components/Table/table'
import {Toast} from '../components/Toast/toast';
import {SearchFilters} from '../components/SearchFilter/salarySearchFilters';
import {LoadingAnimation} from '../components/Animation/loading';
import {getSalaries} from '../libs/api';
import {SalaryToastContent} from '../components/Salary/toastContent';
import {HomeButton} from '../components/HomeButton/homeButton'
import {TableFooter} from '../components/Table/tableFooter'
import {TableHeader} from '../components/Table/tableHeader'


export default function Salaries() {
  const [totalPages, setTotalPages] = useState(0);
  const [salaries, setSalaries] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);
  const [sord, setSord] = useState('asc');
  const [sidx, setSidx] = useState('');
  const [pagedDataChanged, setPagedDataChanged] = useState(false);

  const columns = [
    {key: "year", value: "Año", width: '8%'}, 
    {key: "month", value: "Mes", width: '14%'}, 
    {key: "section", value: "Sector", width: '30%'}, 
    {key: "fullName", value: "Nombre", width: '30%'},
    {key: "monthlyWage", value: "Sueldo mensual", width: '18%'},
  ]

  let yearInput = React.createRef();
  let monthInput = React.createRef();
  let lastNameInput = React.createRef();
  let firstNameInput = React.createRef();
  let sectionInput = React.createRef();
  let positionInput = React.createRef();
  let minMonthlyWageInput = React.createRef();
  let maxMonthlyWageInput = React.createRef();
  const refs = {
    'year': yearInput,
    'monthNum': monthInput,
    'lastName': lastNameInput,
    'firstName': firstNameInput,
    'section': sectionInput,
    'position': positionInput,
    'minMonthlyWage': minMonthlyWageInput,
    'maxMonthlyWage': maxMonthlyWageInput,
  };
  
  useEffect(async () => {
    const filters = {'size': size, 'sidx': 'year', 'sord': 'asc'}
    await loadSalaries(filters);
  }, []);

  useEffect(async () => {
    if(pagedDataChanged){
      await loadSalaries(getFilters());
      setPagedDataChanged(false);
    }
  }, [pagedDataChanged]);

  useEffect(async () => {
    if(sidx)
    await loadSalaries(getFilters());
  }, [sidx, sord])


  const getFilters = () => { 
    const filters = {...refs};

    Object.keys(filters).map(function(key, index) {
      return filters[key] = filters[key].current.value
    });

    filters.size = size;
    filters.page = page - 1;
    filters.sidx = sidx ? sidx : 'year';
    filters.sord = sord ? sord : 'asc';

    return filters;
  }

  const loadSalaries = async (filters) => {
    setLoading(true);
    const response = await getSalaries(filters);
    setLoading(false);

    if(response.success) {
      setSalaries(response.data.items);
      setTotalPages(response.data.pages)

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
    loadSalaries(getFilters());
  }

  const onPagedDataChange = (_size, _page) => {
    setSize(_size);
    setPage(_page);
    setPagedDataChanged(true);
  }

  const onTableHeaderClick = (col) =>{
    if(col == sidx){
      setSord(sord == 'asc' ? 'desc' : 'asc');
    } else {
      setSord('asc');
    }

    setSidx(col);
  }

  const ToastContent = <SalaryToastContent salary={selectedItem}/>;

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
            items={salaries} 
            showToastInfo={showToastInfo} 
            toast={
              <Toast 
                show={show} 
                closeToast={closeToast} 
                title={selectedItem?.header?.fullName} 
                content={ToastContent}/>}
            />
        </table>

        <TableFooter size={size} page={page} totalPages={totalPages} onPagedDataChange={onPagedDataChange} ></TableFooter>
      </div>

    </main>
  );
}

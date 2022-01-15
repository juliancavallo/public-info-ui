import React from "react";
import './table.css';

export const TableFooter = ({ size, page, totalPages, onPagedDataChange }) => {
    const onSelectChange = (e) => {
        const val = e.currentTarget.value;
        onPagedDataChange(e.currentTarget.value, Math.min(val, totalPages));
    }

    const onPageChange = (e) => {
        if(e.key == 'Enter'){
            const val = Math.max(e.currentTarget.value, 1);
            onPagedDataChange(size, Math.min(val, totalPages));
        }
    }

    const changePageValue = (val) => {
        page = Math.max(val, 1);
        page = Math.min(page, totalPages);
        document.getElementById('pageCounter').value = page;
        onPagedDataChange(size, page)
    }

    return (
        <div className="table-footer">
            <button className="page-button" onClick={() => changePageValue(1)}>{'<<'}</button>
            <button className="page-button" onClick={() => changePageValue(--page)}>{'<'}</button>
            <input aria-label="titulo" id='pageCounter' type={'text'} defaultValue={page}  onKeyUp={e => onPageChange(e)}></input>
            <p style={{margin:0}}>de {totalPages}</p>
            <button className="page-button" onClick={() => changePageValue(++page)}>{'>'}</button>
            <button className="page-button" onClick={() => changePageValue(totalPages) }>{'>>'}</button>
        
            <select name="sizeSelect" aria-label="Size select" 
                onChange={e => onSelectChange(e)} defaultValue={size} style={{position:'absolute', right: 0}}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
            </select>

        </div>
        );
  };
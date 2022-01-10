import React from "react";
import './table.css';

export const TableFooter = ({ size, page, totalPages, onPagedDataChange }) => {
    const onSelectChange = (e) => {
        onPagedDataChange(e.currentTarget.value, page)
    }

    const onPageChange = (e) => {
        if(e.key == 'Enter')
            onPagedDataChange(size, e.currentTarget.value);
    }

    const changePageValue = (val) => {
        page = Math.max(val, 1);
        document.getElementById('pageCounter').value = page;
        onPagedDataChange(size, page)
    }

    return (
        <div className="table-footer">
            <select name="sizeSelect" aria-label="Size select" onChange={e => onSelectChange(e)} defaultValue={size}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
            </select>

            <button className="page-button" onClick={() => changePageValue(1)}>{'<<'}</button>
            <button className="page-button" onClick={() => changePageValue(--page)}>{'<'}</button>
            <input aria-label="titulo" id='pageCounter' type={'text'} defaultValue={page}  onKeyUp={e => onPageChange(e)}></input>
            <button className="page-button" onClick={() => changePageValue(++page)}>{'>'}</button>
            <button className="page-button" onClick={() => changePageValue(totalPages) }>{'>>'}</button>
        </div>
        );
  };
import React from 'react'
import Search from '../../search/Search'
import SortBy from '../../SortBy/SortBy'
import './ComunityHeader.css'

const ComunityHeader = (payload) => {
    return (
        <div className="comunity-header">
            <Search placeholder={payload.placeholder} onChange={payload.onChangeSearch}/>
            <SortBy onChange={payload.onChangeSortBy} sortByOptions={payload.sortByOptions}/>
        </div>
    )
}

export default ComunityHeader
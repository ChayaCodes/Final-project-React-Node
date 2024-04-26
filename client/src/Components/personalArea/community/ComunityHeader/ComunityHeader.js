import React from 'react'
import Search from '../../search/Search'
import SortBy from '../../SortBy/SortBy'
import './ComunityHeader.css'

const ComunityHeader = (payload) => {
    return (
        <div className="comunity-header">
            <Search placeholder={payload.placeholder} />
            <SortBy />
        </div>
    )
}

export default ComunityHeader
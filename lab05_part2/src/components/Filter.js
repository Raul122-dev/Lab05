import React from 'react'

const Filter = ({handleChangeFilter, search}) => {
    return (
        <div>
            filter shown with: <input onChange={handleChangeFilter} value={search}/>
        </div>
    )
}

export default Filter

import React from 'react';

const Filter = ({filterTitle, filterItemList}) => {
    return(
      <div className='filter-category'>
        <div className='comp-subtitle1'>{filterTitle}</div>
        {filterItemList.map(item => {
          return <a className='filter-item'>{item}</a>
        })}
      </div>
    )
};

export default Filter;
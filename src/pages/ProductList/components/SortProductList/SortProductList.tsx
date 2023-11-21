import React from 'react'
import { QueryConfig } from '../../ProductList'
import { ProductListConfig } from '../../../../types/product.type'
import classNames from 'classnames'
import { createSearchParams, useNavigate } from 'react-router-dom'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}
export default function SortProductList({ queryConfig, pageSize }: Props) {
  const { sort_by = 'createdAt' } = queryConfig
  const navigate = useNavigate();
  const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }
  const handleSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortByValue
      }).toString(),
    })
  }
  return (
    <div className='bg-grey-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center flex-wrap gap-2'>
          <div className=''>Sap xep theo</div>
          <button
            className={classNames('h-8 px-4 text-center text-sm capitalize', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortBy('view'),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy('view')
            })}
            onClick={() => handleSort('view')}
          >
            Phổ biến
          </button>
          <button
            className={classNames('h-8 px-4 text-center text-sm capitalize', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortBy('createdAt'),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy('createdAt')
            })}
            onClick={() => handleSort('createdAt')}
          >
            Mới nhất
          </button>
          <button
            className={classNames('h-8 px-4 text-center text-sm capitalize', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortBy('sold'),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy('sold')
            })}
            onClick={() => handleSort('sold')}
          >
            ban chay
          </button>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { QueryConfig } from '../../../pages/ProductList/ProductList'
import { ProductListConfig } from '../../../types/product.type'
import classNames from 'classnames'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}
export default function SortProductList({ queryConfig, pageSize }: Props) {
  const { sort_by = 'createdAt' } = queryConfig
  const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
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
          >
            Phổ biến
          </button>
          <button
            className={classNames('h-8 px-4 text-center text-sm capitalize', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortBy('view'),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy('view')
            })}
          >
            Mới nhất
          </button>
          <button className={'h-8 px-4 text-center text-sm capitalize bg-orange text-white hover:bg-orange/80'}>
            ban chay
          </button>
          <select
            className={'h-8  px-4 text-left text-sm capitalize  outline-none bg-orange text-white hover:bg-orange/80'}
            value={''}
            defaultValue=''
          >
            <option value='' disabled className='bg-white text-black'>
              Giá
            </option>
            <option value={'low'} className='bg-white text-black'>
              Giá: Thấp đến cao
            </option>
            <option value={'hight'} className='bg-white text-black'>
              Giá: Cao đến thấp
            </option>
          </select>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function SortProductList() {
  return (
    <div className='bg-grey-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center flex-wrap gap-2'>
          <div className=''>Sap xep theo</div>
          <div className='h-8 px-4 capitalize bg-orange text-white text-sm hover:bg-orange/80'>Phổ biến</div>
          <button className={'h-8 px-4 text-center text-sm capitalize bg-orange text-white hover:bg-orange/80'}>
            Mới nhất
          </button>
          <button className={'h-8 px-4 text-center text-sm capitalize bg-orange text-white hover:bg-orange/80'}>
            ban chay
          </button>
          <select
            className={'h-8  px-4 text-left text-sm capitalize  outline-none bg-orange text-white hover:bg-orange/80'}
            value={''}
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

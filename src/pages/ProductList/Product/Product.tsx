import ProductRating from '../../../components/ProductRating'
import { Link } from 'react-router-dom'
// import path from 'src/constants/path'
// import { Product as ProductType } from 'src/types/product.type'
// import { formatCurrency, formatNumberToSocialStyle, generateNameId } from 'src/utils/utils'

// interface Props {
//   product: ProductType
// }

export default function Product() {
  return (
    <Link to={`/`}>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qj2kzJNkJRDmZMzE0OB_FVs8aT3Z3UJae75_3aLtBVeQ5UUaAMLnn5eExNsHAKeqSpw&usqp=CAU'
            }
            alt={'error'}
            className='absolute top-0 left-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[2rem] text-xs line-clamp-2'>product name</div>
          <div className='mt-3 flex items-center'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span className='text-xs'>₫</span>
              <span className='text-sm'>12</span>
            </div>
            <div className='ml-1 truncate text-orange'>
              <span className='text-xs'>₫</span>
              <span className='text-sm'>13</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <ProductRating rating={2} />
            <div className='ml-2 text-sm'>
              <span>3</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

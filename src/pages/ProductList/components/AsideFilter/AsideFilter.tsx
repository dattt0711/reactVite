import React from 'react'
import { Link, createSearchParams } from 'react-router-dom'
import path from '../../../../constants/path';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import { QueryConfig } from '../../ProductList'
import { Category } from '../../../../types/category.type';
import classNames from 'classnames';

interface Props {
    queryConfig: QueryConfig
    categories: Category[]
}
export default function AsideFilter({ queryConfig, categories }: Props) {
    const { category } = queryConfig;
    return (
        <div className="py-4">
            <Link to={path.home} className={
                classNames("flex items-center font-bold", {
                    'text-orange': !category
                })
            }>
                <svg viewBox='0 0 12 10' className='mr-3 h-4 w-3 fill-current'>
                    <g fillRule='evenodd' stroke='none' strokeWidth={1}>
                        <g transform='translate(-373 -208)'>
                            <g transform='translate(155 191)'>
                                <g transform='translate(218 17)'>
                                    <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                                    <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                                    <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                Tất cả danh mục
            </Link>
            <div className="bg-gray-300 h-[1px] my-4"></div>
            <ul>
                {categories.map((categoryItem) => (
                    <li className='py-2 pl-2' key={categoryItem._id}>
                        <Link
                            to={{
                                pathname: path.home,
                                search: createSearchParams({
                                    ...queryConfig,
                                    category: categoryItem._id
                                }).toString()
                            }}
                            className={classNames('relative px-2', {
                                'font-semibold text-orange': category === categoryItem._id
                            })}
                        >
                            {category === categoryItem._id && (
                                <svg viewBox='0 0 4 7' className='absolute top-1 left-[-10px] h-2 w-2 fill-orange'>
                                    <polygon points='4 3.5 0 0 0 7' />
                                </svg>
                            )}
                            {categoryItem.name}
                        </Link>
                    </li>
                ))}

            </ul>
            <Link to={path.home} className='mt-4 flex items-center font-bold uppercase'>
                <svg
                    enableBackground='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x={0}
                    y={0}
                    className='mr-3 h-4 w-3 fill-current stroke-current'
                >
                    <g>
                        <polyline
                            fill='none'
                            points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeMiterlimit={10}
                        />
                    </g>
                </svg>
                Search
            </Link>
            <div className='my-4 h-[1px] bg-gray-300' />
            <div className='my-5'>
                <div>Khoảng giá</div>
                <form className='mt-2'>
                    <div className='flex items-start'>

                        <Input
                            type='text'
                            className='grow'
                            placeholder='₫ TỪ'
                            classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                            classNameError='hidden'
                        />
                        <div className='mx-2 mt-2 shrink-0'>-</div>
                        <Input
                            type='text'
                            className='grow'
                            placeholder='₫ ĐẾN'
                            classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                            classNameError='hidden'
                        />
                    </div>
                    {/* <div className='mt-1 min-h-[1.25rem] text-center text-sm text-red-600'>{errors.price_min?.message}</div> */}
                    <Button className='flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80'>
                        Áp dụng
                    </Button>
                </form>
            </div>
            <div className='my-4 h-[1px] bg-gray-300' />
            <div className='text-sm'>Đánh giá</div>
            {/* <RatingStars queryConfig={queryConfig} /> */}
            <div className='my-4 h-[1px] bg-gray-300' />
            <Button
                className='flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80'
            >
                Xóa tất cả
            </Button>
        </div>
    )
}

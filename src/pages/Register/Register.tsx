import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { schema, Schema } from '../../utils/rules';
import Input from '../../components/Input';
import { yupResolver } from "@hookform/resolvers/yup"
type FormData = Schema;
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  }
  );
  const onSubmit = handleSubmit((data) => {
    console.log(data, 'data')
  })
  return (
    <div className='bg-orange'>
      {/* <Helmet>
    <title>Đăng nhập | Shopee Clone</title>
    <meta name='description' content='Đăng nhập vào dự án Shopee Clone' />
  </Helmet> */}
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                type='email'
                errorMessage={errors.email?.message}
                placeholder='Enter email'
                className='mt-8'
                name='email'
                register={register}
              />
              <Input
                type='password'
                errorMessage={errors.password?.message}
                placeholder='Enter password'
                className='mt-3'
                name='password'
                register={register}
                autoComplete="on"
              />
              <Input
                type='password'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm password'
                className='mt-3'
                name='confirm_password'
                register={register}
                autoComplete="on"
              />
              <div className='mt-3'>
                <button
                  type='submit'
                  className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
                >
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

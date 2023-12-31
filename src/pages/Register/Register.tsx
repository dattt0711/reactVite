import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { schema, Schema } from '../../utils/rules'
import Input from '../../components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import authApi from '../../apis/auth.api'
import { ErrorResponse } from '../../types/utils.type';
import * as _ from 'lodash'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import { AppContext } from '../../contexts/app.context'
import Button from '../../components/Button'
type FormData = Schema
export default function Register() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = _.omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true);
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data;
          if (formError) {
            Object.keys(formError).forEach(key => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server',
              })
            })
          }
        }
      }
    })
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
                autoComplete='on'
              />
              <Input
                type='password'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm password'
                className='mt-3'
                name='confirm_password'
                register={register}
                autoComplete='on'
              />
              <div className='mt-3'>
                <Button
                  type='submit'
                  className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
                  isLoading={registerAccountMutation.isLoading}
                  disabled={registerAccountMutation.isLoading}
                >
                  Đăng ký
                </Button>
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

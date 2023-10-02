import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
    type: React.HTMLInputTypeAttribute,
    errorMessage?: string,
    placeholder?: string,
    className?: string,
    name: string,
    register: UseFormRegister<any>,
    rules?: RegisterOptions,
    autoComplete?: string,
}

export default function Input(props: Props) {
    const { type, errorMessage, placeholder, className,
        name, register, rules, autoComplete } = props
    return (
        <div className={className}>
            <input
                autoComplete={autoComplete}
                type={type}
                placeholder={placeholder}
                className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focs:shadow-sm'
                {...register(name, rules)}
            />
            <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>{errorMessage}</div>
        </div>
    )
}

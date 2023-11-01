import React, { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string,
    classNameInput?: string,
    classNameError?: string,
    register?: UseFormRegister<any>,
    rules?: RegisterOptions,
}

export default function Input(props: Props) {
    const { type, errorMessage, placeholder, className,
        name, register, rules, autoComplete,
        classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focs:shadow-sm',
        classNameError = 'mt-1 text-red-600 min-h-[1rem] text-sm'
    } = props
    const registerResult = register && name ? register(name, rules) : {};
    return (
        <div className={className}>
            <input
                className={classNameInput}
                autoComplete={autoComplete}
                type={type}
                placeholder={placeholder}
                {...registerResult}
            />
            <div className={classNameError}>{errorMessage}</div>
        </div>
    )
}

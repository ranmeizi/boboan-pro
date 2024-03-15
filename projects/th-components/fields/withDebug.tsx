import React, { useEffect, useRef } from 'react'
import './debugger.less'
const flag = true;

export function withDebug<T extends {}>(Component: React.ComponentType<T>): React.ComponentType<T> {
    return (props: T) => {
        const ref = useRef<HTMLDivElement>(null)
        console.log('qnmd',props)
        return flag
            ? <div className='boboan-pro__debugger-wrap' onClick={() => alert(JSON.stringify(props))}>
                <Component {...props} />
            </div>
            : <Component {...props} />
    }
}
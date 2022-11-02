import React, { memo, useState } from 'react'
import styles from './styles.module.css'

const Heading = () => {
    const [name, _name] = useState<string>('my name is bhargav')

    const changeName = () => {
        _name('Hello  bhargav welcome to first part of Next.js')
    }
    
    return (
        <div>
            <h1 className='text-center text-green-900 m-10 font-bold text-5xl'>
                welcome to my next projects
            </h1>
            <div onClick={changeName} className={styles.name}>
                {name}
            </div>
        </div>
    )
}

export default memo(Heading)
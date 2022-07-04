import React from 'react'

import style from './Search.module.scss'

export default function Search() {
    return (
        <div className={style.root}>
            <input placeholder="Поиск" className={style.input} />
        </div>
    )
}

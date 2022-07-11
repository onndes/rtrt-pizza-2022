import React from 'react'

import style from './Search.module.scss'

export default function Search({ handleChangeSearch, search }) {
    return (
        <div className={style.root}>
            <input
                value={search}
                placeholder="Поиск"
                className={style.input}
                onChange={(e) => handleChangeSearch(e.target.value)}
            />
        </div>
    )
}

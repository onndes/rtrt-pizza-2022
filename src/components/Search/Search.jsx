import React from 'react'
import debounce from 'lodash.debounce'

import style from './Search.module.scss'
import deleteIcon from '../../assets/img/delete-icon.svg'

export default function Search({ handleChangeSearch }) {
    const [inputValue, setInputValue] = React.useState('')

    const inputRef = React.useRef()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchInput = React.useCallback(
        debounce((str) => {
            handleChangeSearch(str)
        }, 400),
        []
    )

    return (
        <div className={style.root}>
            <input
                ref={inputRef}
                value={inputValue}
                placeholder="Поиск"
                onChange={(e) => {
                    updateSearchInput(inputValue)
                    setInputValue(e.target.value)
                }}
            />
            <img
                onClick={() => {
                    handleChangeSearch('')
                    inputRef.current.focus()
                }}
                src={deleteIcon}
                alt=""
                width="20px"
                height="20px"
            />
        </div>
    )
}

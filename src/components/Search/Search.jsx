import React from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'

import style from './Search.module.scss'
import deleteIcon from '../../assets/img/delete-icon.svg'
import { setSearch } from '../../redux/slices/filterSlice'

export default function Search({ handleChangeCategory, activeCategory }) {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = React.useState('')

    const inputRef = React.useRef(null)

    const updateSearchInput = React.useCallback(
        debounce((str) => {
            dispatch(setSearch(str))
        }, 300),
        []
    )

    React.useEffect(() => {
        updateSearchInput(inputValue)
    }, [inputValue])

    React.useEffect(() => {
        if (activeCategory !== 0) {
            setInputValue('')
            dispatch(setSearch(''))
        }
    }, [activeCategory])

    return (
        <div className={style.root}>
            <input
                ref={inputRef}
                value={inputValue}
                placeholder="Поиск"
                onChange={(e) => {
                    setInputValue(e.target.value)
                    handleChangeCategory(0)
                }}
            />
            <img
                onClick={() => {
                    dispatch(setSearch(''))
                    setInputValue('')
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

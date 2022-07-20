import React from 'react'

export default function Sort({
    sort,
    handleChangeSort,
    orderSort,
    handleChangeOrderSort,
}) {
    const itemsSort = ['популярности', 'цене', 'алфавиту']

    const sortRef = React.useRef()
    const [openMenu, setOpenMenu] = React.useState(false)

    const rotateDeg = orderSort ? 'rotate(180)' : 'rotate(0)'

    React.useEffect(() => {
        const handleClickOutMenu = (e) => {
            if (!e.path.includes(sortRef.current)) {
                setOpenMenu(false)
            }
        }

        document.body.addEventListener('click', handleClickOutMenu)

        return () => {
            document.body.removeEventListener('click', handleClickOutMenu)
        }
    }, [])

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <div
                    className="sort__svgWrapper"
                    onClick={handleChangeOrderSort}
                >
                    <svg
                        width="15"
                        height="9"
                        viewBox="0 0 10 6"
                        fill="none"
                        transform={rotateDeg}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            // eslint-disable-next-line max-len
                            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                            fill="#2C2C2C"
                        />
                    </svg>
                </div>
                <b>Сортировка по:</b>
                <span onClick={() => setOpenMenu(!openMenu)}>
                    {itemsSort[sort]}
                </span>
            </div>
            {openMenu && (
                <div className="sort__popup">
                    <ul>
                        {itemsSort.map((name, idx) => (
                            <li
                                key={name}
                                className={sort === idx ? 'active' : ''}
                                onClick={() => {
                                    setOpenMenu(false)
                                    handleChangeSort(idx)
                                }}
                            >
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

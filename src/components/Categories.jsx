import React from 'react'

export default function Categories({ activeCategory, handleChangeCategory }) {
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return (
        <div className="categories">
            <ul>
                {categories.map((category, idx) => (
                    <button
                        type="button"
                        key={category}
                        onClick={() => handleChangeCategory(idx)}
                        className={idx === activeCategory ? 'active' : ''}
                    >
                        {category}
                    </button>
                ))}
            </ul>
        </div>
    )
}

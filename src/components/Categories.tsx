import React from 'react'

type CategoriesTypes = {
    activeCategory: number
    handleChangeCategory: (categoryIdx: number) => void
}

const Categories: React.FC<CategoriesTypes> = ({
    activeCategory,
    handleChangeCategory,
}) => {
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

export default Categories

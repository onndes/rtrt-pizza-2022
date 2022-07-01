import React from 'react'

export default function Categories() {
    const [selectedCategoryIdx, setSelectedCategoryIdx] = React.useState(0)
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
                        onClick={() => setSelectedCategoryIdx(idx)}
                        className={idx === selectedCategoryIdx ? 'active' : ''}
                    >
                        {category}
                    </button>
                ))}
            </ul>
        </div>
    )
}

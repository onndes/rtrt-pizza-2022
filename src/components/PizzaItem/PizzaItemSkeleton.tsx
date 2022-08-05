import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaItemSkeleton: React.FC = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="131" cy="109" r="108" />
        <rect x="0" y="231" rx="5" ry="5" width="280" height="26" />
        <rect x="1" y="276" rx="11" ry="11" width="280" height="83" />
        <rect x="8" y="381" rx="10" ry="10" width="90" height="25" />
        <rect x="126" y="370" rx="10" ry="10" width="152" height="46" />
    </ContentLoader>
)

export default PizzaItemSkeleton

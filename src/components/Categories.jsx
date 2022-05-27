import React, { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={category}
              onClick={() => onClickCategory(index)}
              className={activeIndex === index ? 'active' : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;

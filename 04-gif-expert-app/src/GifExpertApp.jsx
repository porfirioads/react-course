import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories(['Valorant', ...categories])
  };

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <input />

      {/* Gif list */}
      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

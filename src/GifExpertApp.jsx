import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  // const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  const [categories, setCategories] = useState(['Garfield']);
  
  const onAddCategory = (newCategory) => {
  
    //if (categories.includes(newCategory)) return;
    if (categories.includes(newCategory)) return;

    // categories.push('SAO');
    // setCategories(cat => [...categories, 'Valorant']);
    setCategories([newCategory, ...categories]);
  };


  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory 
      onNewCategory= {  value => onAddCategory(value) }
    />

    {/* <AddCategory setCategories = {setCategories}></AddCategory> */}
    {/* <button onClick={ onAddCategory } >Agregar</button> */}

    { 
      categories.map( (category) => (
        <GifGrid key={category} category={category}/>


      ) )
    }

      {/* <li>ABC</li> */}
    </>
  )
}

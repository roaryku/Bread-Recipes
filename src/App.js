import './App.css';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import video from './bread.mp4';
import icon from './icons8.png'
import MyRecipesComponent from './MyRecipesComponent';

function App(){

  const MY_ID = "fbf1aefa";
  const MY_KEY = "1c7e7a9e2f62ef5ccd608ced66f4e2c3";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('bread');

  
    const getNewRecipe = useCallback(async () => {
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await responce.json();
      console.log(data.hits);
      setMyRecipes(data.hits);
    },[wordSubmitted])
    useEffect(() =>{
      getNewRecipe();
  }, [getNewRecipe])

const myRecipeSearch = (e) => {
  console.log(e.target.value);
  setMySearch(e.target.value);
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}

  return(
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Find your bread recipe</h1>
    </div>
      
      <div className='container'>
        <form onSubmit = {finalSearch}>
          <input className='search' placeholder='search...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
          <button className='btn'>
            <img src={icon} width="35px" className='icons' alt='baking'/>
          </button>
      </div>

      <div>
        {myRecipes.map(element => (
          <MyRecipesComponent 
          label = {element.recipe.label}
          cuisine = {element.recipe.cuisineType}
          image = {element.recipe.image}
          ingredients = {element.recipe.ingredientLines}
          calories = {element.recipe.calories}
          diet = {element.recipe.dietLabels}
          time = {element.recipe.totalTime}
          />
        ))}
      </div>
    </div>
  
  )
}
export default App;

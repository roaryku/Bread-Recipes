import icon from './double.png';

function MyRecipesComponent({label, image, ingredients, cuisine, calories, diet, time}){
    return(
        <div>
             <div className="container">
                <img className="tasty" src={image} width="200" alt="breadSearch"/>
            </div>

            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <h3>{cuisine}</h3>
            </div>

            <ul className="list">
                {ingredients.map( (ingredient, index) => (
                    <li key={index}><img src={icon} alt='checkBox' className='icon'/>
                    {ingredient}</li>
                ))}
            </ul>

            <div className="container">
                <p className="par">{diet}</p>
            </div>

            <div className="container">
                <p className="par">{calories.toFixed()} calories</p>
            </div>

            <div className="container">
                <p className="par">{time} minutes</p>
            </div>
        </div>
    )
}
export default MyRecipesComponent;
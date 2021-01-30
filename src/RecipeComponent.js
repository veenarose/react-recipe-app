import React from 'react';
import style from "./recipeComponent.module.css";


const RecepieComp = ({ title, image, calories, ingredients }) => {
    return (
        <div className={style.recipes}>
            <h1 >{title}</h1>
            <ol>
                {ingredients.map(item =>(
                    <li>{item.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img src={image} alt="" />

        </div>
    );
}

export default RecepieComp;
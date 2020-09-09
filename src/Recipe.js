import React from "react";
import style from "./recipe.module.css";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,

  dietLabels,
}) => {
  return (
    <div className={style.recipe}>
      <h1>
        <center>{title}</center>
      </h1>
      <p>amount of calories included ={calories}</p>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Diet Lable= {dietLabels}</p>

      <img className={style.image} src={image} alt="" />
    </div>
  );
};
export default Recipe;

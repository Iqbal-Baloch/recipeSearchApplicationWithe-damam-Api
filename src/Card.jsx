import React from "react";
export function Card({data}) {
  return (
        <div className='card'>
            <img src={data.recipe.image} />
            <h3>{data.recipe.label} hello</h3>
        </div>
    );
}
  
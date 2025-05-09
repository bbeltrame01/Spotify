import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title="", itemsCount=0, itemsArray=[], path="", idPath="" }) => {
  const pathname = useLocation().pathname;
  const isHome = pathname === "/";
  const finalItems = isHome ? itemsCount : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isHome && (
          <Link to={path} className="item-list__link">Mostrar tudo</Link>
        )}
      </div>

      <div className="item-list__container">

        {itemsArray.filter((_, idx) => (idx < finalItems)).map((artist, idx) => {
          return <SingleItem key={`${title}-${idx}`} data={artist} idPath={idPath} />
        })}

      </div>
    </div>
  )
}

export default ItemList;

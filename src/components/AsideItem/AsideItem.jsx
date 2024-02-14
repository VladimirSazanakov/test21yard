import React from "react";
import style from "./AsideItem.module.scss";

const AsideItem = ({ itemName, itemImg }) => {
  return (
    <div className={style.asideMenu__item}>
      <img alt="ico" src={itemImg} className={style.asideMenu__img} />
      <a href="#" className={style.asideMenu__itemName}>{itemName}</a>
    </div>
  )
}

export default AsideItem;
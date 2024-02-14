import React from "react";
import style from "./AsideMenu.module.scss";
import AsideItem from "../AsideItem"
import controlPanel from "../asside/img/menu_dashboard.svg"

const AsideMenu = () => {
  return (
    <aside className={style.asideMenu}>

      <AsideItem itemName="Панель управления" itemImg={controlPanel} />


    </aside>
  )
}
export default AsideMenu;
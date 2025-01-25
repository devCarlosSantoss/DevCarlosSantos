import React from "react";
import style from "./style.module.scss";
import profileImage from "../../../assets/images/img-profile-perfil.jpeg";

const Navigation = () => {
  return (
    <div className={style.container}>
      <img
        className={style.profileImg}
        src={profileImage}
        alt="Foto de Perfil"
      />
      <p className={style.nome}>Carlos Vinicius</p>
      <hr />
      <nav className={style.navContainer}>
        <ul className={style.menuNavigation}>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre-mim">Sobre Mim</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

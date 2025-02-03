import React, { useState } from "react";
import style from "./Navigation.module.scss";
import profileImage from "../../../assets/images/img-profile-perfil.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import MenuCloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { IconButton } from "@mui/material";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.logoContainer}>
        <img
          className={style.profileImg}
          src={profileImage}
          alt="Foto de Perfil"
        />
        <p className={style.nome}>Carlos Vinicius</p>
      </div>

      <IconButton
        className={style.menuIconContainer}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <MenuCloseIcon fontSize="large" style={{ color: "white" }} />
        ) : (
          <MenuIcon fontSize="large" style={{ color: "white" }} />
        )}
      </IconButton>

      <nav className={`${style.navContainer} ${isOpen ? style.showMenu : ""}`}>
        <ul className={style.menuNavigation}>
          <li>
            <a href="#home">
              <HomeIcon /> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#sobre-mim">
              <PersonIcon /> <span>Sobre Mim</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <BuildIcon /> <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#projetos">
              <WorkIcon /> <span>Projetos</span>
            </a>
          </li>
          <li>
            <a href="#servicos">
              <MiscellaneousServicesIcon /> <span>Serviços</span>
            </a>
          </li>
          <li>
            <a href="#contato">
              <ContactMailIcon /> <span>Contato</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

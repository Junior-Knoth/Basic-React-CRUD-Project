import React from "react";
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

//Rotas
import Create from "../../pages/Create";


function Header() {
    return (
    <div className={styles['header-conteiner']}>
        <nav className={styles['navbar']}>
            <Link to={'/create'}><i className={`${styles['font']} bi bi-patch-plus-fill`}></i></Link>
            <Link to={'/list'}><i className={`${styles['font']} bi bi-list-task`}></i></Link>
            <Link to={'/edit'}><i className={`${styles['font']} bi bi-pencil-fill`}></i></Link>
            <Link to={'/delete'}><i className={`${styles['font']} bi bi-trash-fill`}></i></Link>
        </nav>
    </div>
    )
}

export default Header
import React from 'react';
import { Link } from 'react-router-dom'
import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/accumulation' className={styles.menuItem}>
                Накопления
            </Link>
            <Link to='/costs' className={styles.menuItem}>
                Расходы
            </Link>
        </header>
    )
}
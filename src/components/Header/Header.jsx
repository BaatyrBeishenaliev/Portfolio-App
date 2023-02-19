
import React from 'react'
import classes from './Header.module.css'

export default function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.headerWrapper}>
                    <div className={classes.leftBlock}>
                        <h1 className={classes.title}>My Portfolio</h1>
                    </div>
                    <div className={classes.rightBlock}>
                        <nav className={classes.nav}>
                            <ul className={classes.menu}>
                                <li className={classes.listItems}>
                                    <a href='996703337111' className={classes.listItemsLink}>+996703337111</a>
                                </li>
                                <li className={classes.listItems}>
                                    <a href='https://www.instagram.com/baatyr_beishenaliev/' className={classes.listItemsLink}>Instagram</a>
                                </li>
                                <li className={classes.listItems}>
                                    <a href='https://t.me/baatyrl' className={classes.listItemsLink}>Telegram</a>
                                </li>
                                <li className={classes.listItems}>
                                    <a href='https://api.whatsapp.com/send?phone=996703337111' className={classes.listItemsLink}>WhatsApp</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

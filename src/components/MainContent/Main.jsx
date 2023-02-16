import React from 'react'
import classes from './Main.module.css'

export default function Main() {
  return (
    <main className={classes.main}>
        <div className={classes.container}>
            <div className={classes.mainInner}>
                <div className={classes.AboutMe}>
                    <h2>Hello 👋</h2>
                    <h1>My name is Baatyr, i'm 17 years old</h1>
                    <h2>I'm FrontEnd Developer</h2>

                    <div className={classes.skillsBlock}>
                        <h2 className={classes.skills}>My hard skills</h2>
                        <img src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png' width={'80px'}></img>
                        <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png' width={'80px'}></img>
                        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' width={'80px'}></img>
                        <img src='https://cdn-icons-png.flaticon.com/512/875/875209.png' width={'80px'}></img>
                        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968381.png' width={'80px'}></img>
                    </div>
                </div>
                <div className={classes.userPhoto}>
                    <img src='https://cdn-icons-png.flaticon.com/512/1999/1999625.png'></img>
                </div>
            </div>
        </div>
    </main>
  )
}

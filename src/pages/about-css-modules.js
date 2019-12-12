import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
console.log(styles)

const User = props => (
	<div className={styles.user}>
		<img src={props.avatar} className={styles.avatar} alt=""/>
	</div>
)

export default () => (
	<Container>
		<h1>About CSS Modules</h1>
		<p>CSS Modules are cool</p>
		<User
			avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
		/>
	</Container>
)
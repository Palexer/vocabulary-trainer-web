<template>
	<link
		rel="stylesheet"
		href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
		integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
		crossorigin="anonymous"
	/>
	<nav id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/practice">Practice</router-link> |
		<router-link to="/create">Create new file</router-link>
	</nav>
	<router-view />
</template>

<style>
@import "./nord.css";

* {
	margin: 0 auto;
	padding: 0 auto;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	font-size: 14pt;
	background-color: var(--nord0);
	color: var(--nord4);
}

h1 {
	font-size: 28pt;
	margin-bottom: 5%;
}

h2 {
	font-size: 24pt;
	margin-bottom: 5%;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--nord0);
}

#nav {
	padding: 20px;
	background: #232730;
}

#nav a {
	font-weight: bold;
	text-decoration: none;
	font-size: 14pt;
	background: #232730;
}

#nav a.router-link-exact-active {
	color: var(--nord8);
}

.first-btn {
	border: 0px;
	border-radius: 5px;
	padding: 7px 15px;
	background: var(--nord2);
	color: var(--nord4);
	text-decoration: none;
}

.first-btn * {
	background: var(--nord2);
}

.first-btn:hover {
	cursor: pointer;
	background: var(--nord3);
	transition: 0.15s;
}

.first-btn:hover * {
	background: var(--nord3);
}
</style>

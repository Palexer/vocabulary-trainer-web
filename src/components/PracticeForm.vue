<template>
	<form action="" id="practice-form">
		<p>{{ lang1 }} &ndash; {{ lang2 }}</p>
		<p id="foreignWord">{{ foreignWord }}</p>
		<input type="text" placeholder="Translation" required id="translation-input" /> <br />
		<input type="text" placeholder="Grammar" required id="grammar-input" /> <br />
		<input type="submit" value="Check" class="first-btn" />
	</form>
</template>

<script>
export default {
	name: "PracticeForm",
	data() {
		return {}
	},
}
</script>

<style>
form {
	border: 1px solid var(--nord4);
	border-radius: 5px;
	padding: 5%;
	width: 35%;
	margin-top: 3%;
	display: none;
	transition: display 0.15s;
}

form * {
	margin: 10px;
}

form input[type="text"] {
	resize: vertical;
	padding: 12px;
	border: 1px solid var(--nord4);
	border-radius: 5px;
	box-sizing: border-box;
}

form input[type="text"]::placeholder {
	color: var(--nord4);
	opacity: 0.65;
}

form input[type="text"]:focus {
	outline-color: var(--nord10);
}

@media screen and (max-width: 600px) {
	* {
		font-size: 12pt;
	}

	form {
		width: 80%;
		margin-top: 20%;
	}
}
</style>

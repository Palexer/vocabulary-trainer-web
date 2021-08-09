<template>
	<form action="" id="practice-form">
		<p>Lang1 &ndash; Lang2</p>
		<p id="foreignWord">Word</p>
		<input type="text" placeholder="Translation" required id="translation-input" /> <br />
		<input type="text" placeholder="Grammar" required id="grammar-input" /> <br />
		<input type="submit" value="Check" class="first-btn" />
	</form>
</template>

<script>
export default {
	name: "PracticeForm",
}
</script>

<style>
form {
	border: 1px solid var(--nord4);
	border-radius: 5px;
	width: 50%;
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

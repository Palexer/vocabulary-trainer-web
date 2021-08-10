<template>
	<div class="container">
		<h1>
			Error 404 <br />
			Page Not Found
		</h1>
		<i class="far fa-frown" id="emoji"></i>
		<div id="button">
			<router-link to="/" class="first-btn"
				><i class="fas fa-home"></i> Go To Homepage</router-link
			>
		</div>
	</div>
</template>

<style scoped>
.container {
	width: 100%;
	height: 93vh;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 33.3% 33.3% 33.3%;
	grid-template-areas:
		"heading"
		"emoji"
		"button";
}
h1 {
	margin-top: 10%;
	grid-area: "heading";
}

#emoji {
	margin-top: 3%;
	font-size: 32pt;
	grid-area: "emoji";
}

#button {
	grid-area: "button";
}
</style>

<template>
	<div class="container">
		<h1>Vocabulary Trainer</h1>

		<div class="features">
			<div class="item">
				<p><i class="fab fa-git-alt"></i> Free and open source</p>
			</div>
			<div class="item">
				<p><i class="fas fa-desktop"></i> For PC, web and mobile devices</p>
			</div>
			<div class="item">
				<p><i class="fas fa-headphones"></i> Listen to the words</p>
			</div>
		</div>

		<a href="/practice" class="first-btn">Start Practicing <i class="fas fa-play"></i></a>
	</div>
</template>

<script>
export default {
	name: "Home",
}
</script>

<style scoped>
.container {
	width: 80%;
	height: 80%;
	padding: 5%;
}

.features {
	margin-bottom: 5%;
}

.item p {
	text-align: justify;
	max-width: 60%;
	background: var(--nord1);
}

.item p i {
	background: var(--nord1);
}

.item {
	display: inline-block;
	background: var(--nord1);
	border-radius: 10px;
	padding: 10px;
	margin: 20px;
}
</style>

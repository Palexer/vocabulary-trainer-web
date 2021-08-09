<template>
	<form action="">
		<input type="text" placeholder="Original word" required /> <br />
		<input type="text" placeholder="Translation" required /> <br />
		<input type="text" placeholder="Grammar" required /> <br />
		<input type="submit" value="Add word" class="first-btn" @click="addWord()" />
	</form>
	<a
		href="data:application/xml;charset=utf-8,{{ vocabularyDataString }}"
		download="vocabulary.yaml"
		class="first-btn"
		><i class="fas fa-save"></i> Save</a
	>
</template>

<script>
export default {
	name: "CreateFileForm",
	data() {
		return {
			vocabularyDataString: String,
		}
	},
	methods: {
		addWord() {},
	},
}
</script>

<style scoped></style>

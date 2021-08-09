<template>
	<label for="file-upload" class="custom-file-upload">
		<i class="fas fa-folder-open"></i> Open file
	</label>
	<input id="file-upload" type="file" @change="readFile()" ref="fileinput" />
</template>

<script>
export default {
	name: "FileUpload",
	methods: {
		readFile() {
			const reader = new FileReader()
			reader.readAsText(this.$refs.fileinput.files[0])

			if (
				this.$refs.fileinput.files[0].name
					.split(".")
					.pop()
					.toLowerCase() != "json"
			) {
				return
			}

			reader.onload = function() {
				try {
					sessionStorage.vocdata = JSON.parse(reader.result)
				} catch (e) {
					console.log(e)
				}
			}
			document.getElementById("practice-form").style.display = "block"
			document.getElementById("foreignWord").setAttribute("value", sessionStorage.vocdata)
		},
	},
}
</script>

<style scoped>
input[type="file"] {
	display: none;
}

.custom-file-upload {
	border: 1px solid var(--nord4);
	border-radius: 5px;
	display: inline-block;
	padding: 6px 12px;
	cursor: pointer;
}

.custom-file-upload:hover #icon {
	color: var(--nord8);
	transition: 0.15s;
}

.custom-file-upload:hover {
	color: var(--nord8);
	border-color: var(--nord8);
	transition: 0.15s;
}
</style>

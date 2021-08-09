<template>
	<div class="container">
		<FileUpload />
		<PracticeForm />
	</div>
</template>

<script>
import PracticeForm from "@/components/PracticeForm.vue"
import FileUpload from "@/components/FileUpload.vue"

export default {
	name: "Practice",
	components: {
		PracticeForm,
		FileUpload,
	},
}
</script>
<style scoped>
.container {
	padding: 30px;
}
</style>

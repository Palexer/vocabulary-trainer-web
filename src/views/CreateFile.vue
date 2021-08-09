<template>
	<div class="container">
		<h2>Create a new vocabulary file</h2>
		<CreateFileForm />
	</div>
</template>

<script>
import CreateFileForm from "@/components/CreateFileForm.vue"

export default {
	name: "CreateFile",
	components: {
		CreateFileForm,
	},
}
</script>

<style scoped>
.container {
	padding: 30px;
}
</style>

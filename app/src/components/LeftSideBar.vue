

<style lang = "less">
	.left-bar{
		font-size : 1rem;
	}
</style>

<template>
	<div class = "left-bar">
       <My-Comment></My-Comment>
	</div>
</template>

<script>
	import "../css/lib/myGrid.css";
	import MyComment from "./MyComment.vue";
	export default {
		data(){
			return {}
		},
		components : {
			MyComment
		}
	}
</script>
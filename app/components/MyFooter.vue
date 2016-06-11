<style lang = "less">
	@color : #321312;
	@white : #ffffff;
	.footer{
		color : @white;
		background-color : @color;
	}
</style>

<template>
	<div>this is footer</div>
	<div class = "footer">{{message}}</div>
</template>

<script>
	export default {
		data(){
			return {
				message : "haha"
			}
		},
		methods : {

		}
	}
</script>
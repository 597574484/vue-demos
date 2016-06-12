<style lang = "less">
	@color : #321312;
	@white : #ffffff;
	body{
		padding : 0;
		margin : 0;
	}

	.footer{
		color : @white;
		background-color : @color;
		position : absolute;
		bottom : 0;
		width : 100%
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
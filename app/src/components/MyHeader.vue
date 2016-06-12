<template>
	<header id = "top-header">
		<i id = "logo"></i>
		<nav>
			<a href = "#">首页</a>
			<a href = "#">笔迹</a>
			<a href = "#">Hehe</a>
			<span class = "baseline"></span>
			<div class = "navbar-btn">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	</header>
</template>

<style lang = "less">
	@height : 60px;
	@bkColor : rgba(0,0,0,.6);
	@color : #ffffff;

	.header-style(@height, @bgColor,@color){
		height : @height;
		line-height : @height;
		background-color : @bgColor;
		color : @color;
		box-shadow : 0 4px 4px (@color / 2 + @bgColor / 2);
		font-size : (@height /3);
	}
	#top-header{
		padding : 0;
		margin : 0;
		position : absolute;
		top : 0;
		width : 100%;
		font-family : "Trebuchet MS",Helvetica,"Microsoft YaHei",Georgia,sans-serif;
		.header-style(@height, @bkColor, @color);
	}
	#top-header nav{
		display : inline-block;
		position : absolute;
		right : 20px;
	}
	.baseline{
		position : absolute;
	}
	#top-header a:link, #top-header a:visited{
		padding : 0 10px;
		height : 100%;
		transition : all .3s ease-in-out;
	}
	#top-header a:hover, #top-header a:active{
		background-color : @color;
		color : @bkColor;
		border-radius : 4px;
	}
</style>

<script>
	export default {
		data(){
			return {msg : "it's Header"}
		}
	}
</script>
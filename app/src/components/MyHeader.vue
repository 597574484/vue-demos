<template>
	<header id = "top-header">
		<i id = "logo"></i>
		<nav>
			<div class = "navbar-list">
				<a href = "#">首页</a>
				<a href = "#">笔迹</a>
				<a href = "#">Hehe</a>
				<span class = "move"></span>
			</div>
			<button class = "navbar-btn">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</nav>
	</header>
</template>

<style lang = "less">
	@height : 60px;
	@bkColor : rgba(0,0,0,.6);
	@color : #ffffff;
	@linkCount : 3;

	.header-style(@height, @bgColor,@color){
		height : @height;
		line-height : @height;
		color : @color;
		box-shadow : 0 4px 4px (@color / 2 + @bgColor / 2);
		font-size : (@height /3);
	}
	#top-header{
		padding : 0;
		margin : 0;
		position : fixed;
		top : 0;
		width : 100%;
		font-family : "Trebuchet MS",Helvetica,"Microsoft YaHei",Georgia,sans-serif;
		.header-style(@height, @bkColor, @color);
		background-color : #ffffff;
		z-index : 3;
	}
	#logo{
		background :  url("../assets/favicon_x32.ico") no-repeat center;
		width : @height * 0.8; height : @height * 0.8;
		position : absolute;
		top : 0; bottom :0;left : 20px;
		margin-top : auto;margin-bottom :auto;
		border-radius : 50%;
		transition: transform .4s ease-in-out;
	}
	#logo:after{
		display: inline-block;
		content :" Fanhehe";
		font-size : 2rem;
		color : #ff0000;
		visibility: hidden;
		transform: translateZ(0);
		position : relative;
		bottom : 3px;
	}
	#logo:hover{
		transform :rotate(360deg);

	}
	#logo:hover:after{
		visibility: hidden;
		transform : translate(50px,0);
	}
	#top-header nav{
		display : inline-block;
		position : absolute;
		right : 20px;
		font-size : 0;
	}
	#top-header a:link, #top-header a:visited{
		display : inline-block;	
		padding : 0 20px;
		height : 100%;
		transition : all .3s ease-in-out;
		font-size : 1rem;
	}
	#top-header a:hover, #top-header a:active{
		background-color : @color;
		color : @bkColor;
		border-radius : 4px;
	}
	.move{
		bottom : 0;
		left : 0%;
		position : absolute;
		width : 100% / @linkCount;
		border-top :4px solid @color;
		transition : left .3s ease-in-out;
	}
	#top-header nav a:nth-child(1):hover~.move{
		left : 100% / @linkCount * 0;
	}
	#top-header nav a:nth-child(2):hover~.move{
		left : 100% / @linkCount * 1;
	}
	#top-header nav a:nth-child(3):hover~.move{
		left : 100% / @linkCount * 2;
	}
	.navbar-btn{
		position : relative;
		top : @height*0.2;
		height : @height * 0.6;
		width : @height * 0.6;
		border-radius: 4px;
		background-color : #ffffff;
		border-width : 1px;
	}
	.navbar-btn:target{
		background-color : red;
	}
	.navbar-btn span{
		display : block;
		border-top : 2px solid #000000;
		border-bottom : 2px solid #000000;
		border-radius: 2px;
		margin-top : 2px;

	}
	@media screen and (max-width : 768px){
		.navbar-list{
				display: none;
		}
		.navbar-btn{
			display : block;
		}
	}
	@media screen and (min-width : 768px){
		.navbar-btn{
			display : none;
		}
		.navbar-list{
			display: block;
		}
	}
</style>

<script>
	export default {
		data(){
			return {msg : "it's Header"}
		}
	}
</script>
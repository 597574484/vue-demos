

<template>
	<div class="article-wrap">
		<article class="article-item">
			<header>
				<p class = "article-time">四月 29, 2016</p>
				<h2 class = "article-title"><a href = "#">钢铁是怎样练成的</a></h2>
			</header>
			<div class= "article-content">Content</div>
			<footer>
				<a href = "#" class = "read-more re-btn">Read more</a>
				<a href = "#" class = "return re-btn">Return</a>
				<div class = "article-ctr">Article-ctr</div>
			</footer>
		</article>
	</div>
</template>

<script>
	import "../css/lib/myGrid.css";
	export default {
		data(){
			return {a : 1}
		}
	}
</script>

<style lang = "less">
	@fontColor : #c5c5c5;
	@fontSize : 1rem;
	@wrapOffsetX : 15px;


	.article-wrap{
		margin : 0 @wrapOffsetX;
		vertical-align: middle;
	}
	.article-item{
		font-size : @fontSize;
		font-family: inherit;
	}
	.article-item header{
		font-size : 1em;
	}
	.article-item .article-time{
		color : @fontColor;
		font-weight: bold;
		font-size : @fontSize;
		line-height : @fontSize;
	}
	.article-item .article-time:before{
		content : "";
		background-color : #ff0000;
		width : 0.6 *@fontSize;
		height : 0.6 *@fontSize;		
		display: inline-block;
		position : relative;
		vertical-align:baseline;
		left : -2 * @wrapOffsetX;
	}
	.article-title, .article-content,.article-item footer{
		padding-left : 0.6* @fontSize;
	}
	.article-title {
		margin : .3rem 0;
		font-size : 2 * @fontSize;

	}
	.article-title a{
		font-weight :bold;
	}
	.re-btn{
		display : block;
		text-transform: uppercase;
	}
</style>
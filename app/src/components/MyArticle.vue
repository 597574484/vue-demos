<template>
	<div class="article-wrap" :class="{thumbnail :thumbnail}">
		<article class="article-item">
			<header>
				<p class = "article-time">{{article.time}}</p>
				<h2 class = "article-title"><a href = "#">{{article.title}}</a></h2>
			</header>
			<div class= "article-content">{{article.content}}</div>
			<footer>
				<a href = "#" class = "re-btn readmore-return">Read more</a>
				<div class = "article-ctr">
					<span class = "ctr-readCount ctr-count">〇({{article.readCount}})</span>
					</span>
					<span class = "ctr-likeCount ctr-count" >❤({{article.likeCount}})</span>
					</span>
				</div>
			</footer>
		</article>
	</div>
</template>

<script>
	import "../css/lib/myGrid.css";
	export default {
		props : ['thumbnail','article']
	}

</script>

<style lang = "less">
	@fontColor : #c5c5c5;
	@fontSize : 1rem;
	@wrapOffsetX : 15px;


	.article-wrap{
		margin : 0 @wrapOffsetX;
		vertical-align: middle;
		/*min-width :250px;*/
	}
	
	.article-item{
		font-size : @fontSize;
		font-family: inherit;
	}
	.article-item header{
		font-size : 1em;
	}
	.article-time{
		color : @fontColor;
		font-weight: 600;
		font-size : @fontSize;
		line-height : @fontSize;
	}
	.article-time:before{
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
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.article-content{
		line-height : 210%;
		font-size : 1.3rem;
	}
	.re-btn{
		display : inline-block;
		text-transform: uppercase;
		padding : 0.4rem 0;
	}
	.article-ctr{
		text-align : right;
	}
	.ctr-count{
		display: inline-block;
		min-width : 40px;
	}
	.thumbnail .article-content{
		max-height : 165px;
		overflow: hidden;
	}
</style>
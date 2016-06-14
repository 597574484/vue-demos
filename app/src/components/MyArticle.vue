

<template>
	<div class="article-wrap">
		<article class="article-item">
			<header>
				<p class = "article-time">四月 29, 2016</p>
				<h2 class = "article-title"><a href = "#">钢铁是怎样练成的</a></h2>
			</header>
			<div class= "article-content">这张图片生成的就是表达式1*2+3*4+5*6的伪码，原理依然是上一篇文章所讲到的语法树模型，如果你理解了上一篇文章中所讲的语法树，那么伪码的生成对你来说也会很容易理解。

通过伪码可以看到，其伪码的生成也是遵循四则运算法则的。

其中的t0,t1就相当于汇编语言中的寄存器，如果你熟悉汇编语言，那么理解上面的伪码会更容易一些。

我们先来回顾下上一篇文章所讲的语法树模型：</div>
			<footer>
				<a href = "#" class = "re-btn readmore-return">Read more</a>
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
</style>
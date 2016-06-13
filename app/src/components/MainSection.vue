<style lang = "less">
	
	.main-page .article-wrap{
		margin-top : 30px;
	}
	.article-wrap:first-of-type{
		margin-top : 120px;
	}
</style>

<template>
	<div class="main-page">
		<My-Article ></My-Article>
		<My-Article ></My-Article>
		<My-Article ></My-Article>
		<My-Article ></My-Article>
		<My-Article ></My-Article>
		<My-Article ></My-Article>
		<My-Article ></My-Article>
		<My-Article ></My-Article>
		<My-Article ></My-Article>
		<My-Article ></My-Article>
	</div>
</template>

<script>
	import "../css/lib/myGrid.css";
	import MyArticle from './MyArticle.vue';
	export default {
		data(){
			return {};
		},
		components : {
			MyArticle
		}
	}
</script>
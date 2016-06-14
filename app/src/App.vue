<template>
	<My-Header ></My-Header>
	<div class = "container main-content">
		<div class = "row main-row">
			<div class = "col-sm-4 hidden-xs left-sidebar-wrap">
    			<Left-Side-Bar class = "left-sidebar"></Left-Side-Bar>
    		</div>
			<Main-Section  class = "col-sm-8 col-xs-12 main-section"></Main-Section>
    	</div>
	</div>
</template>

<script>
	import "./css/lib/myGrid.css";
	import "./css/page/main.css";
	import MyHeader from './components/MyHeader.vue';
	import LeftSideBar from './components/LeftSideBar.vue';
	import MainSection from './components/MainSection.vue';
	export default {
		data(){
			return {msg : "hehea"};
		},
		components :{
			MyHeader,
			LeftSideBar,
			MainSection
		}
	}
</script>

<style lang = "less">
	@left-sidebar-width : 250px;
	.main-content{
		position : relative;
		top : 60px;
	}
	.left-sidebar-wrap{
		position : relative;
	}
	.left-sidebar-wrap:after{
		display: block;
		content : "";
		font-size : 0;
		clear: both;
	}
	.left-sidebar{
		position : fixed;
		max-width : @left-sidebar-width;
		overflow : hidden;
		top : 60px;
		left : 0;
	}
	.main-section{
		border-left : 1px solid #d3d3d3;
		position : relative;
		background-color : #ffffff;
	}
</style>
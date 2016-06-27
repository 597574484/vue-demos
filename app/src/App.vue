<template>
	<My-Header ></My-Header>
	<div class = "container main-content">
		<div class = "row main-row">
			<div class = "col-sm-4 hidden-xs">
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
			return {msg : "hehe"};
		},
		components :{
			MyHeader,
			LeftSideBar,
			MainSection
		}
	}
</script>

<style lang = "less">
	.main-content{
		position : relative;
		top : 60px;
	}
	.left-sidebar{
		position : fixed;
		overflow : hidden;
		top : 60px;
		left : 0;
		width : 35.33%;
		height : 100%;
		padding : 15px;
	}
	.main-section{
		border-left : 1px solid #d3d3d3;
		position : relative;
		background-color : #ffffff;
	}
</style>
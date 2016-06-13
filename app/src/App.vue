
<template>
	<My-Header ></My-Header>
	<div class = "container main-content">
		<div class = "row main-row">
			
    		<Left-Side-Bar class = "col-sm-4 hidden-xs left-side-bar"></Left-Side-Bar>
			<Main-Section  class = "col-sm-8 col-xs-12 main-section"></Main-Section>
    	</div>
	</div>
</template>

<script>
	import "./css/lib/myGrid.css";
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
	a{
        text-decoration: none;
      }
    ::selection, :selection{
        background-color : #00ffff;
        color : #ffffff;
        border-radius: 4px;
    }
	.main-content{
		position : relative;
		top : 60px;
	}
	.left-side-bar{
		position : fixed;
	}
	.main-section{
		border-left : 1px solid #d3d3d3;
		position : relative;
	}

	/*Below is global style*/
	p, h1, h2, h3, h4, h5, h6 ul, li{
		margin : 0;
	}
	@media screen and (max-width : 768px){
		.hidden-xs{
			display: none;
		}
	}
</style>
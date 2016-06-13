
<template>
	<div>
		<My-Header ></My-Header>
	</div>
	<div class = "container main-content">
		<div class = "row main-row">
    		<Left-Side-Bar class = "col-sm-4 left-bar hidden-sm" ></Left-Side-Bar>
			<Main-Section  class = "col-sm-8 main-section col-sm-12" ></Main-Section>
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
    };
	.main-content{
		position : absolute;
		top :60px; right:0;bottom:0;left:0;
		margin :auto;
	}
	.main-row, .left-bar, .main-section{
		height : 100%;
	}
	.main-section{
		border-left : 1px solid #d3d3d3;
	}
</style>
import vue from 'vue';
import App from './App.vue'; 
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import LeftSideBar from './components/LeftSideBar.vue';

new vue({
	el : "body",
	data : {
		message : "hehe"
	},
	components :{
		MyHeader,
		App,
		LeftSideBar
	}
});
import vue from 'vue';
import App from './App.vue'; 
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';

new vue({
	el : "body",
	data : {
		message : "hehe"
	},
	components :{
		App,
		MyFooter,
		MyHeader
	}
});
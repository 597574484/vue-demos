import vue from 'vue';
import App from '../components/App.vue'; 
import MyFooter from '../components/MyFooter.vue';

new vue({
	el : "body",
	data : {
		message : "hehe"
	},
	components :{
		App,
		MyFooter
	}
});
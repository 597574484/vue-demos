import vue from 'vue';
import App from '../components/App.vue'; 

new vue({
	el : "body",
	data : {
		message : "hehe"
	},
	components :{
		App
	}
});
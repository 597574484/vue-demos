<style lang = "less">
	.main-page .article-wrap{
		margin-top : 30px;
	}
	.article-wrap:first-of-type{
		margin-top : 120px;
	}
</style>

<template>
	<div class="main-page" >
		<My-Article thumbnail="true" v-for="item in articles" :article="item"></My-Article>
	</div>
</template>

<script>
	import "../css/lib/myGrid.css";
	import MyArticle from './MyArticle.vue';
	export default {
		data(){
			return {
				articles : [{
					time : "23,12 2005",
					title : "name",
					content : "我们将属性名为非负整数（0、1、2……）的属性称为Element。V8中，Element的存放和其他属性是分开的。每个对象都有一个指向Element数组的指针，对象Map中的Element Field将反映出Element是如何存储的。注意，Map中并不包含Element的描述符，但可能包含其它有着不同Element类型的同一种Map的Transition描述符（译注：换言之，一个Map只对应一种Element数组，如果Element数组的类型不同，会形成一个Transition。）。大多数情况下，对象都会有FastElement，也就是说这些Element以连续数组的形式存放。有三种不同的Fast Element：我们将属性名为非负整数（0、1、2……）的属性称为Element。V8中，Element的存放和其他属性是分开的。每个对象都有一个指向Element数组的指针，对象Map中的Element Field将反映出Element是如何存储的。注意，Map中并不包含Element的描述符，但可能包含其它有着不同Element类型的同一种Map的Transition描述符（译注：换言之，一个Map只对应一种Element数组，如果Element数组的类型不同，会形成一个Transition。）。大多数情况下，对象都会有FastElement，也就是说这些Element以连续数组的形式存放。有三种不同的Fast Element：",
					readCount : 100,
					likeCount : 50
				},{
					time : "24,12 2005",
					title : "name",
					content : "我们将属性名为非负整数（0、1、2……）的属性称为Element。V8中，Element的存放和其他属性是分开的。每个对象都有一个指向Element数组的指针，对象Map中的Element Field将反映出Element是如何存储的。注意，Map中并不包含Element的描述符，但可能包含其它有着不同Element类型的同一种Map的Transition描述符（译注：换言之，一个Map只对应一种Element数组，如果Element数组的类型不同，会形成一个Transition。）。大多数情况下，对象都会有FastElement，也就是说这些Element以连续数组的形式存放。有三种不同的Fast Element：",
					readCount : 100,
					likeCount : 50
				},{
					time : "25,12 2005",
					title : "name",
					content : "我们将属性名为非负整数（0、1、2……）的属性称为Element。V8中，Element的存放和其他属性是分开的。每个对象都有一个指向Element数组的指针，对象Map中的Element Field将反映出Element是如何存储的。注意，Map中并不包含Element的描述符，但可能包含其它有着不同Element类型的同一种Map的Transition描述符（译注：换言之，一个Map只对应一种Element数组，如果Element数组的类型不同，会形成一个Transition。）。大多数情况下，对象都会有FastElement，也就是说这些Element以连续数组的形式存放。有三种不同的Fast Element：",
					readCount : 100,
					likeCount : 50
				},{
					time : "26,12 2005",
					title : "name",
					content : "我们将属性名为非负整数（0、1、2……）的属性称为Element。V8中，Element的存放和其他属性是分开的。每个对象都有一个指向Element数组的指针，对象Map中的Element Field将反映出Element是如何存储的。注意，Map中并不包含Element的描述符，但可能包含其它有着不同Element类型的同一种Map的Transition描述符（译注：换言之，一个Map只对应一种Element数组，如果Element数组的类型不同，会形成一个Transition。）。大多数情况下，对象都会有FastElement，也就是说这些Element以连续数组的形式存放。有三种不同的Fast Element：",
					readCount : 100,
					likeCount : 50
				},{
					time : "27,12 2005",
					title : "name",
					content : "我们将属性名为非负整数（0、1、2……）的属性称为Element。V8中，Element的存放和其他属性是分开的。每个对象都有一个指向Element数组的指针，对象Map中的Element Field将反映出Element是如何存储的。注意，Map中并不包含Element的描述符，但可能包含其它有着不同Element类型的同一种Map的Transition描述符（译注：换言之，一个Map只对应一种Element数组，如果Element数组的类型不同，会形成一个Transition。）。大多数情况下，对象都会有FastElement，也就是说这些Element以连续数组的形式存放。有三种不同的Fast Element：",
					readCount : 100,
					likeCount : 50
				},{
					time : "28,12 2005",
					title : "name",
					content : "我们将属性名为非负整数（0、1、2……）的属性称为Element。V8中，Element的存放和其他属性是分开的。每个对象都有一个指向Element数组的指针，对象Map中的Element Field将反映出Element是如何存储的。注意，Map中并不包含Element的描述符，但可能包含其它有着不同Element类型的同一种Map的Transition描述符（译注：换言之，一个Map只对应一种Element数组，如果Element数组的类型不同，会形成一个Transition。）。大多数情况下，对象都会有FastElement，也就是说这些Element以连续数组的形式存放。有三种不同的Fast Element：",
					readCount : 100,
					likeCount : 50
				}]
			};
		},
		components : {
			MyArticle
		}
	}
</script>
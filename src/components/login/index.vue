<template>
	<yd-layout>
		<top :t='title'></top>
	</yd-layout>
</template>

<script>
	import top from '@/components/comon/top'
	import bus from '@/assets/javascript/common/bus.js'
	export default {
		name : 'login',
		components:{top},
		data(){
			return {
				title:{
					title:'登录',
					left:true,
					right:true,
					leftName:'',
					rightName:'注册',
					righturl:'/register'
				}
			}
		},
		mounted:function(){
			bus.$emit('footershow',false);
		}
		
	}
</script>

<style scoped="scoped">
</style>
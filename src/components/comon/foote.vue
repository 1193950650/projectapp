<template>
    <yd-tabbar :fixed='isfixed' v-if='isshow'>
        <yd-tabbar-item title="首页" link="/index">
            <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="附近" link="/login" >
           <yd-icon name="location" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="发现" link="/login" >
            <yd-icon name="search" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>     
        <yd-tabbar-item title="订单" link="/login">
           <yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>  
        <yd-tabbar-item title="我的" link="/register">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
</template>

<script type="text/babel">
	import bus from '@/assets/javascript/common/bus.js'
    export default {
		data(){
			return {
				isfixed:true,
				isshow:true,
				f:true
			}
		},
		mounted:function(){
			bus.$on('footershow',(data)=>{
				this.isshow = data;
				this.f = true;
			})
		},
		watch:{
			'$route'(to,from){
				if(!this.f){
					this.isshow = true;
				}
				this.f = false;
			}
		},
    }
</script>

<style>
</style>
<template>
    <yd-navbar :title="t.title" :fixed='isflexd'>
        <router-link to="" slot="left" v-on:click.native = 'goback' v-if='t.left' >
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
        <router-link :to="t.righturl" slot="right" v-if='t.right'>
            <yd-navbar-next-icon>{{t.rightName}}</yd-navbar-next-icon>
        </router-link>
    </yd-navbar>
</template>

<script>
    export default {
		name:'top',
		props:['t'],
		data(){
			return{
				isflexd:true
			}
		},
		methods:{
			goback:function(){
				var sizelength = window.history.length
				if(sizelength < 1){
					this.$router.push('/index');
				}else{
					this.$router.goback = true
					this.$router.go(-1);
				}
			}
		}
    }
</script>

<style>
</style>
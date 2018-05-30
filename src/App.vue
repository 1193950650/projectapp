<template>
	<div class="html">
		<transition :name="transitionName">
			
				<router-view></router-view>
			
			</transition>
		<foote></foote>
	</div>
</template>

<script>
	import foote from '@/components/comon/foote'
	export default {
		name: 'App',
		data() {
			return {　　
				transitionName: 'slide-right',
				show:'true'
			}
		},
		components: {
			foote
		},
		watch: {　　　
			'$route' (to, from) {　　　　
				let isBack = this.$router.goback == undefined ? false : this.$router.goback; //  监听路由变化时的状态为前进还是后退
				if(isBack) {　　　　　　　　
					this.transitionName = 'slide-right'　　　　　　
				} else {　　　　　　
					this.transitionName = 'slide-left'　　　　　
				}　　
				this.$router.goback = false
			}　
		}
	}
</script>
<style scoped="scoped">
	.html {
		height: 100%;
		width: 100%;
	}
	
	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		will-change: transform;
		transition: all .2s;
		position: absolute;
		width: 100%;
		left: 0;
	}
	
	.slide-right-enter {
		transform: translateX(-100%);
	}
	
	.slide-right-leave-active {
		transform: translateX(100%);
	}
	
	.slide-left-enter {
		transform: translateX(100%);
	}
	
	.slide-left-leave-active {
		transform: translateX(-100%);
	}
</style>
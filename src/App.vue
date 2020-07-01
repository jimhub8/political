<template>
<div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="page_preloader" style="opacity: .6;" v-show="loading">
        <div class="preloader_wrap preloader_square">
            <div class="preloader_square1"></div>
            <div class="preloader_square2"></div>
        </div>
    </div>
    <myHeader />
    <transition name="fade">
        <router-view />
    </transition>
    <myFooter />
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import eventBus from './main';

import myFooter from './components/inc/footer'
import myHeader from './components/inc/vueHeader'
export default {
    name: 'App',
    components: {
        myFooter,
        myHeader
    },
    data() {
        return {
            loading: true,
        }
    },
    methods: {
        loader() {
            setTimeout(() => {
                this.loading = false
            }, 1500);
        }
    },
    mounted() {
        this.loader();
    },
    created() {
        eventBus.$on('loadingEvent', data => {
            data
            this.loading = true;
            this.loader();
        });
    },
}
</script>

<style>
.app {
    font-family: 'Montserrat', sans-serif;
}

.fade-enter-active {
    transition: opacity 2s, transform 2s;
}

.fade-enter {
    opacity: 0;
    transform: translate(20px);
}

.scheme_default #page_preloader,
.scheme_default .page_content_wrap,
.scheme_default .custom-background .content_wrap>.content,
.scheme_default .page_banner_wrap~.content_wrap>.content {
    background-color: #ffffff;
}

#page_preloader {
    background-color: #ffffff !important;
}

#page_preloader {
    background-color: #f0f0f0;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: 0.8;
    position: fixed;
    z-index: 1000000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
</style>

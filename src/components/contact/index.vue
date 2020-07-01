<template>
<div class="body_wrap">
    <div id="page_preloader" style="opacity: .6;" v-show="loading">
        <div class="preloader_wrap preloader_square">
            <div class="preloader_square1"></div>
            <div class="preloader_square2"></div>
        </div>
    </div>
    <headerPartial :title="title" />
    <div class="page_wrap">
        <div class="page_content_wrap">
            <div class="content_wrap">
                <div class="content">
                    <article id="post-464" class="post_item_single post_type_page post-464 page type-page status-publish hentry">
                        <div class="post_content entry-content">
                            <div data-elementor-type="wp-post" data-elementor-id="464" class="elementor elementor-464" data-elementor-settings="[]">
                                <div class="elementor-inner">
                                    <div class="elementor-section-wrap">
                                        <Section1 />
                                        <Section2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import headerPartial from '../inc/headerPartial'
import Section1 from './section1'
import Section2 from './section2'
import eventBus from '../../main';

export default {
    name: 'contact',
    data() {
        return {
            title: 'Contact',
            loading: true
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
        eventBus.$emit('loadingEvent')
    },
    components: {
        headerPartial,
        Section1,
        Section2
    }
}
</script>

<style scoped>
.page_content_wrap {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}
</style>

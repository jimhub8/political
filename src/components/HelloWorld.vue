<template>
<div class="body_wrap">
    <div class="page_wrap">
        <div class="page_content_wrap">
            <div class="content_wrap">
                <div class="content">
                    <article id="post-464" class="post_item_single post_type_page post-464 page type-page status-publish hentry">
                        <div class="post_content entry-content">
                            <div data-elementor-type="wp-post" data-elementor-id="464" class="elementor elementor-464" data-elementor-settings="[]">
                                <div class="elementor-inner">
                                    <div class="elementor-section-wrap">
                                        <mySlider />
                                        <Section1 />
                                        <div style="height: 50px;"></div>
                                        <Section2 />
                                        <div style="height: 50px;"></div>
                                        <Section3 />
                                        <div style="height: 50px;"></div>
                                        <Section4 />
                                        <div style="height: 50px;"></div>
                                        <Section5 />
                                        <div style="height: 50px;"></div>
                                        <Section6 />
                                        <div style="height: 50px;"></div>
                                        <Section7 />
                                        <div style="height: 50px;"></div>
                                        <Section8 />

                                        <Section9 />
                                        <div style="height: 50px;"></div>

                                        <Section10 />
                                        <!-- <div style="height: 50px;"></div> -->

                                        <Section11 />
                                        <div style="height: 50px;"></div>

                                        <Section12 />
                                        <div style="height: 50px;"></div>

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
import Section1 from './home/section1'
import Section2 from './home/section2'
import Section3 from './home/section3'
import Section4 from './home/section4'
import Section5 from './home/section5'
import Section6 from './home/section6'
import Section7 from './home/section7'
import Section8 from './home/section8'
import Section9 from './home/section9'
import Section10 from './home/section10'
import Section11 from './home/section11'
import Section12 from './home/section12'
import mySlider from './home/Slider'

import eventBus from '../main';

export default {
    name: 'Home',
    components: {
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
        Section6,
        Section7,
        Section8,
        Section9,
        Section10,
        Section11,
        Section12,
        mySlider,
    },
    mounted() {
        // this.loader();
        eventBus.$emit('loadingEvent')
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.page_content_wrap {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}
</style>

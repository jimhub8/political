<template>
<section class="elementor-element elementor-element-403b1ae elementor-section-full_width scheme_dark sc_layouts_hide_on_frontpage elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="403b1ae" data-element_type="section">
    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-row">
            <div class="elementor-element elementor-element-3c394d4 sc_layouts_column_icons_position_left elementor-column elementor-col-100 elementor-top-column" data-id="3c394d4" data-element_type="column">
                <div class="elementor-column-wrap  elementor-element-populated">
                    <div class="elementor-widget-wrap">
                        <div class="sc_layouts_item elementor-element elementor-element-fc1cbee sc_fly_static elementor-widget elementor-widget-trx_sc_layouts_title" data-id="fc1cbee" data-element_type="widget" data-widget_type="trx_sc_layouts_title.default">
                            <div class="elementor-widget-container">
                                <div id="trx_sc_layouts_title_279075942" class="sc_layouts_title hide_on_frontpage hide_on_singular hide_on_other sc_align_center with_content without_image without_tint">
                                    <div class="sc_layouts_title_content">
                                        <div class="sc_layouts_title_title">
                                            <h1 class="sc_layouts_title_caption">{{ title }}</h1>
                                        </div>
                                        <div class="sc_layouts_title_breadcrumbs">
                                            <div class="breadcrumbs">
                                                <router-link class="breadcrumbs_item home" to="/">Home</router-link>
                                                <span class="breadcrumbs_delimiter"></span><span class="breadcrumbs_item current">{{ title }}</span>
                                            </div>
                                        </div>
                                    </div><!-- .sc_layouts_title_content -->
                                </div><!-- /.sc_layouts_title -->
                            </div>
                        </div>
                    </div>
                </div>
    <!-- <img alt="Vue logo" src="/assets/logo.png"> -->
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.sc_layouts_title.with_content {
    position: relative;
    min-height: 0em;
}

.elementor-widget-container {
    padding: 5.2em 1em 5.8em 1em;
    background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(81, 94, 138, 0.301)), url(/assets/images/kenya.jpg);
    background-position: center center;
    background-size: cover;
}
</style>

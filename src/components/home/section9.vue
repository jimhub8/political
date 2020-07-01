<template>
<section class="elementor-element elementor-element-daabc28 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section animated fadeIn" style="width: 1585px; left: -192.5px;padding: 100px 0;">
    <div class="elementor-background-overlay"></div>
    <div class="elementor-container elementor-column-gap-extended">
        <div class="elementor-row">
            <div class="elementor-element elementor-element-b3ba7eb sc_bg_mask_5 sc_layouts_column_icons_position_left elementor-column elementor-col-100 elementor-top-column" data-id="b3ba7eb" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div class="elementor-column-wrap  elementor-element-populated">
                    <div class="elementor-widget-wrap">
                        <div class="elementor-element elementor-element-4b5dcf5 sc_fly_static elementor-widget elementor-widget-spacer" data-id="4b5dcf5" data-element_type="widget" data-widget_type="spacer.default">
                            <div class="elementor-widget-container">
                                <div class="elementor-spacer">
                                    <div class="elementor-spacer-inner"></div>
                                </div>
                            </div>
                        </div>

                        <myCarousel />

                        <div class="elementor-element elementor-element-2a39423 sc_fly_static elementor-widget elementor-widget-spacer" data-id="2a39423" data-element_type="widget" data-widget_type="spacer.default">
                            <div class="elementor-widget-container">
                                <div class="elementor-spacer">
                                    <div class="elementor-spacer-inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import myCarousel from './Carousel2'
export default {
    components: {
        myCarousel,
    },
}
</script>

<style scoped>
.elementor-464 .elementor-element.elementor-element-daabc28:not(.elementor-motion-effects-element-type-background),
.elementor-464 .elementor-element.elementor-element-daabc28>.elementor-motion-effects-container>.elementor-motion-effects-layer {
    background-image: url("http://partiso.axiomthemes.com/wp-content/uploads/2018/10/bg-3-copyright.jpg");
    background-position: center right;

    background-size: cover;
}

.elementor-element-daabc28 {
    width: 1585px;
    left: -192.5px;
    padding: 50px
}

@media (max-width: 768px) {
    .elementor-element-daabc28 {
        width: 100vw !important;
        left: -15% !important;
    }
}
</style>

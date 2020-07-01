<template>
<section class="elementor-element elementor-element-2266010 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section animated fadeIn">
    <div class="elementor-container elementor-column-gap-extended">
        <div class="elementor-row">
            <div class="elementor-element elementor-element-ca5187f sc_layouts_column_icons_position_left elementor-column elementor-col-100 elementor-top-column" data-id="ca5187f" data-element_type="column">
                <div class="elementor-column-wrap  elementor-element-populated">
                    <div class="elementor-widget-wrap">
                        <div class="elementor-element elementor-element-3e5808b sc_fly_static elementor-widget elementor-widget-spacer" data-id="3e5808b" data-element_type="widget" data-widget_type="spacer.default">
                            <div class="elementor-widget-container">
                                <div class="elementor-spacer">
                                    <div class="elementor-spacer-inner"></div>
                                </div>
                            </div>
                        </div>
                                                                       <myCarousel />

                        <div class="elementor-element elementor-element-a2c1fe1 sc_fly_static elementor-widget elementor-widget-spacer" data-id="a2c1fe1" data-element_type="widget" data-widget_type="spacer.default">
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
import myCarousel from "./Carousel";
export default {
    components: {
        myCarousel,
    },
}
</script>

<style scoped>
.elementor a {
    color: #1a273d;
}

.elementor a:hover {
    color: #f00;
}

.elementor-element-2266010 {
    width: 1585px;
    left: -192.5px;
}

@media (max-width: 768px) {

.elementor-element-2266010 {
    width: 100vw !important;
    left: -12% !important;
    
}
}

</style>

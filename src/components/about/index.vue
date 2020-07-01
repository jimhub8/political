<template>
<div class="body_wrap">
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
                                        <!-- <Section1 /> -->
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
import eventBus from '../../main';

export default {
  name: 'about',
  data() {
    return {
      title: 'About Us'
    }
  },
  mounted () {
      eventBus.$emit('loadingEvent')
  },
  components: {
    headerPartial
  }
}
</script>


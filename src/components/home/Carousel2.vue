<template>
<el-carousel indicator-position="outside" :autoplay="false">
    <el-carousel-item v-for="(item, index) in items" :key="index">
        <p style="color: #fff;  font-family: 'Oleo Script', cursive; font-size: 44px;">{{ item.content }}</p>
    </el-carousel-item>
</el-carousel>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                content: '“I’m glad that The Partiso decided to visit the Siemens plant in Steele Creek. I pass this plant every day on my way to work.”',
            }, {
                content: '“I would like to support your ideas to make a better future for us and our children. Thank you for the work you do for our citizens!”',
            }, {
                content: '“Thank you for fighting against employees’ rights negligence. This used to be a huge issue at our plant, but now it gets much better.”',
            }]
        }
    },
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item h3 {
    color: #fff !important;
    font-family: "Butler", sans-serif;
}

.el-carousel__item {
    background-color: #d3dce6;
}

.el-carousel--horizontal {
    width: 100%;
}

.el-carousel__item {
    background-color: #02020200;
    text-align: center;
}
</style>

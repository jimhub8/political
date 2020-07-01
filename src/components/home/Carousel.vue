<template>
<el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="(item, index) in items" :key="index">
        <el-card :body-style="{ padding: '0px' }">
            <img :src="item.image" class="image">
            <div style="padding: 14px;text-align: center">
                <span style="font-family: 'Monoton', serif;font-size: 18px; color: red">
                    <el-tag>NEWS</el-tag> SEPT 22, 2020
                </span>
                <div class="bottom clearfix">
                    <p>{{ item.content }}</p>
                </div>
            </div>
        </el-card>
    </el-carousel-item>
</el-carousel>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                image: 'http://partiso.axiomthemes.com/wp-content/uploads/2018/10/post-3-copyright-1170x858.jpg',
                date: 'Jan 4, 2020',
                content: 'The Campaign Report: We Do What’s in the Best Interests of the Nation',
                by: '',
            }, {
                image: 'http://partiso.axiomthemes.com/wp-content/uploads/2018/10/post-4-copyright-1170x858.jpg',
                date: 'Jan 4, 2020',
                content: 'Meet & Greet with the Candidates in October/November',
                by: '',
            }, {
                image: 'http://partiso.axiomthemes.com/wp-content/uploads/2018/10/post-5-copyright-1170x858.jpg',
                date: 'Jan 4, 2020',
                content: 'What You Need to Know Before Voting: Independent Opinion',
                by: '',
            }, {
                image: 'http://partiso.axiomthemes.com/wp-content/uploads/2018/10/post-6-copyright-1170x858.jpg',
                date: 'Jan 4, 2020',
                content: 'What are the Most Successful Methods to Fight Against Tax Scam',
                by: '',
            }, ]
        }
    },
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.el-carousel--horizontal {
    width: 100%;
}

.elementor img {
    width: 100%;
    height: 410px;
}
</style>

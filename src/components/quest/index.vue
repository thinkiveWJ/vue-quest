<template>
    <div id="index">
        <i-row>
            <i-col :md="{span: 18, push: 3}" :xs="24" class="header">
                <div class="header-box">
                    <div class="icon">
                        <div class="left-icon"></div>
                        <div class="right-icon"></div>
                    </div>
                    <div class="zh">专家体验</div>
                    <div class="en">Expert experience</div>
                </div>
                <img :src="bg">
            </i-col>
        </i-row>
        <router-view/>
    </div>
</template>
<script type="text/ecmascript-6">
import bgPc from '@/assets/bg-pc.png'
import bgPhone from '@/assets/bg-phone.png'
export default {
    data () {
        return {
            bg: ''
        }
    },
    methods: {
    },
    mounted: function () {
        var w = document.documentElement.scrollWidth || document.body.scrollWidth;
            this.bg = w > 750 ?  bgPc : bgPhone;
    }
}
</script>
<style lang="less">

</style>




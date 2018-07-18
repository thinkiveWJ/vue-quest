<template>
    <div id="expertExperience">
        <i-row  class="quest">
            <i-col :xs="24" :md="{span: 18, push: 3}" class="item">
                <div class="quest-title">
                    <div class="zh"><span class="must">*</span> 1、您的年龄段是？</div>
                    <div class="en">Which age category do you belong to?</div>
                </div>
                <div class="quest-answer">
                    <i-radio-group v-model="answer" vertical>
                         <i-radio label="apple1">
                            <span>Apple1</span>
                        </i-radio>
                        <i-radio label="apple2">
                            <span>Apple2</span>
                        </i-radio>
                        <i-radio label="apple3">
                            <span>Apple3</span>
                        </i-radio>
                    </i-radio-group>
                </div>
            </i-col>
            <i-col :xs="24" :md="{span: 18, push: 3}" class="item">
                <div class="quest-title">
                    <div class="zh"><span class="must">*</span> 1、您的年龄段是？</div>
                    <div class="en">Which age category do you belong to?</div>
                </div>
                <div class="quest-answer">
                    <i-radio-group v-model="answer2" vertical>
                         <i-radio label="apple4">
                            <span>Apple4</span>
                        </i-radio>
                        <i-radio label="apple5">
                            <span>Apple5</span>
                        </i-radio>
                        <i-radio label="apple6">
                            <span>Apple6</span>
                        </i-radio>
                    </i-radio-group>
                </div>
            </i-col>
            <i-col :xs="24" :md="{span: 18, push: 3}" class="item">
                <div class="quest-title">
                    <div class="zh"><span class="must">*</span> 1、您的年龄段是？</div>
                    <div class="en">Which age category do you belong to?</div>
                </div>
                <div class="quest-answer">
                    <div class="textarea">
                        <textarea placeholder="请输入您的意见"></textarea>
                    </div>
                </div>
            </i-col>
            <i-col :xs="24" :md="{span: 18, push: 3}" class="item">
                <div class="btn clearfix">
                    <i-button class="right" type="primary">提交</i-button>
                </div>
            </i-col>
        </i-row>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    data () {
        return {
            answer: '',
            answer2: ''
        }
    }
}
</script>
<style lang="less">

</style>




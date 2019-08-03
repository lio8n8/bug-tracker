<template>
    <button class="btn-animated" @click="emitClick">{{text}}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        emitClick() {
            this.$emit('click');
        }
    }
};
</script>

<style lang="scss">
@import '@/assets/scss/constants.scss';
@import '@/assets/scss/common.scss';

.btn-animated {
    @extend .btn-standard;

    background: linear-gradient(
        to right,
        $color-light-green,
        $color-light-green
    );
    background-color: $color-dark-grey;
    background-repeat: no-repeat;
    background-size: 0 100%;
    transition: background-size 0.1s 0s;

    &:hover {
        background-size: 100% 100%;
    }
}
</style>

<template>
    <input class="input-default" />
</template>

<style lang="scss">
@import '@/assets/scss/constants.scss';
.input-default {
    flex-grow: 1;
    border: none;
    font-size: 22px;
    color: $color-dark-blue;

    &:hover,
    &:active,
    &:focus {
        border: none;
        outline: none;
    }
}
</style>

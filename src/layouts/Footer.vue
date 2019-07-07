<template>
    <footer class="footer">
        <span class="copy">&copy; 2019</span>
    </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/constants.scss";

footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    width: 100vw;
    background-color: $color-dark-grey;
    color: #fff;

    .copy {
        display: inline-flex;
        justify-content: center;
    }
}
</style>
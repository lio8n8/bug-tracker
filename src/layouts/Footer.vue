<template>
    <footer class="footer">
        <span class="copy">&copy; 2019</span>
    </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/constants.scss";

footer {
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    height: 100px;
    width: 100vw;
    background-color: $color-dark-grey;
    color: #fff;
    padding: 0 10px;

    .copy {
        height: 100%;
        display: inline-flex;
        align-items: center;
    }
}
</style>
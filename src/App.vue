<template>
    <div id="app">
        <header-element></header-element>
        <router-view class="component"></router-view>
        <footer-element></footer-element>
    </div>
</template>

<script>
import HeaderElement from "./layouts/Header.vue";
import FooterElement from "./layouts/Footer.vue";

export default {
    components: {
        HeaderElement,
        FooterElement
    }
};
</script>


<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.component {
    display: flex;
    flex-grow: 1;
}
</style>

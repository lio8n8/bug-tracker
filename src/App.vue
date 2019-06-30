<template>
    <div id="app">
        <header-element></header-element>
        <router-view class="container"></router-view>
        <footer-element></footer-element>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";

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
</style>

<template>
    <nav class="navbar navbar-light navbar-expand">
        <input
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
        />
        <div id="navbarTogglerDemo01" class="collapse navbar-collapse">
            <a class="navbar-brand" href="#">app</a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <router-link to="/tasks" tag="li" active-class="active" class="nav-item" exact>
                    <a class="nav-link">Tasks</a>
                </router-link>
            </ul>
            <ul class="navbar-nav navbar-right">
                <router-link to="/signin" tag="li" active-class="active" class="nav-item">
                    <a class="nav-link">Signin</a>
                </router-link>
                <router-link to="/signout" tag="li" active-class="active" class="nav-item">
                    <a class="nav-link">Signout</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/constants.scss";

nav {
    background-color: $color-dark-grey;
    color: #fff;
    height: 80px;
}

.nav-item {
    border: 1px solid $color-light-green;
    padding: 0 10px;
    &:hover {
        background-color: #000;
        box-shadow: 2px 2px 5px #000;
    }
}

nav .navbar-nav li a {
    color: white !important;
}
</style>

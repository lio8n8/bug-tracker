<template>
    <nav>
        <ul class="app-nav app-nav-left">
            <router-link to="/tasks" tag="li" class="app-nav-item">
                <a class="nav-link">Tasks</a>
            </router-link>
        </ul>
        <ul class="app-nav">
            <router-link to="/signin" tag="li" class="app-nav-item">
                <a class="nav-link">Signin</a>
            </router-link>
            <router-link to="/signout" tag="li" class="app-nav-item">
                <a class="nav-link">Signout</a>
            </router-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/constants.scss';

nav {
    display: flex;
    align-items: center;
    height: 60px;
    width: 100vw;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 0 20px;
    background-color: $color-dark-grey;
    color: #fff;
}

.app-nav {
    display: flex;
    list-style: none;
    padding: 0;
}

.app-nav-left {
    flex-grow: 1;
}

.app-nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    min-width: 60px;
    border: 1px solid $color-light-green;
    padding: 0 10px;
    &:hover {
        background-color: #000;
        box-shadow: 2px 2px 5px #000;
    }
}

.nav-link {
    color: #fff;
    text-decoration: none;
}
</style>

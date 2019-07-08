<template>
    <div class="signin">
        <button class="btn-standard back-btn">{{$t('common.back')}}</button>
        <div class="form-wrap">
            <h2 class="title">{{$t('common.signin')}}</h2>
            <form v-on:submit.prevent>
                <div class="form-item">
                    <label for="email">{{$t('forms.emaillabel')}}:</label>
                    <input v-model="user.email" type="email" class="form-control" id="email" />
                    <div v-if="errors.psw" class="form-error">{{errors.email}}</div>
                </div>
                <div class="form-item">
                    <label for="psw">{{$t('forms.pswlabel')}}:</label>
                    <input v-model="user.psw" type="password" class="form-control" id="psw" />
                    <div v-if="errors.psw" class="form-error">{{errors.psw}}</div>
                </div>
                <button
                    type="submit"
                    class="btn-green btn-submit"
                    @click="signin"
                >{{$t('common.submit')}}</button>
                <div class="link">
                    {{$t('signin.notregistered')}}
                    <a href="/signup">{{$t('common.signup')}}</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: '',
                psw: ''
            },
            errors: {
                email: '',
                psw: ''
            }
        };
    },
    methods: {
        signin() {}
    }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

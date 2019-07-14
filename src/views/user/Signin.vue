<template>
    <div class="signin">
        <button class="btn-standard back-btn">{{$t('common.back')}}</button>
        <div class="form-wrap">
            <h2 class="title">{{$t('common.signin')}}</h2>
            <form v-on:submit.prevent>
                <div class="form-item" :class="{ 'form-item-error': errors.email }">
                    <label for="email">{{$t('forms.emaillabel')}}:</label>
                    <input v-model="user.email" type="email" class="form-control" id="email" />
                </div>
                <div v-if="errors.email" class="form-error">{{errors.email}}</div>
                <div class="form-item" :class="{ 'form-item-error': errors.psw }">
                    <label for="psw">{{$t('forms.pswlabel')}}:</label>
                    <input v-model="user.psw" type="password" class="form-control" id="psw" />
                </div>
                <div v-if="errors.psw" class="form-error">{{errors.psw}}</div>
                <button
                    type="submit"
                    class="btn-green btn-submit"
                    @click="signin"
                >{{$t('common.submit')}}</button>
                <div class="link">
                    {{$t('signin.notregistered')}}
                    <a
                        href="/bug-tracker/signup"
                    >{{$t('common.signup')}}</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import urls from '../../urls';

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
        signin() {
            if (!this.validate()) {
                return;
            }

            this.axios
                .post(urls.auth, this.user)
                .then(res => {
                    this.$router.push('/');
                })
                .catch(err => {
                    console.error(err);
                });
        },
        validate() {
            let isValid = true;
            this.errors = {
                email: '',
                psw: ''
            };

            if (!this.user.email || this.user.email.length <= 0) {
                this.errors.email = this.$i18n.t('forms.errors.emailIsEmpty');
                isValid = false;
            }

            if (!this.user.psw) {
                this.errors.psw = this.$i18n.t('forms.errors.pswIsEmpty');
                isValid = false;
            }

            return isValid;
        }
    }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

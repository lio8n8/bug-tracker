<template>
    <div class="signup">
        <button class="btn-standard back-btn">{{$t('common.back')}}</button>
        <div class="form-wrap">
            <h2 class="title">{{$t('common.signup')}}</h2>
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

                <div class="form-item" :class="{ 'form-item-error': errors.confirmPsw }">
                    <label for="psw">{{$t('forms.confirmpsw')}}:</label>
                    <input
                        v-model="user.confirmPsw"
                        type="password"
                        class="form-control"
                        id="confirm-psw"
                    />
                </div>
                <div v-if="errors.confirmPsw" class="form-error">{{errors.confirmPpsw}}</div>

                <button-animated
                    class="btn-submit"
                    type="submit"
                    :text="$t('common.submit')"
                    @click="signup"
                />

                <div class="link">
                    {{$t('signup.haveaccount')}}
                    <a
                        href="/bug-tracker/signup"
                    >{{$t('common.signin')}}</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import urls from '../../urls';
import buttonAnimated from '../../components/buttons/button-animated';

export default {
    components: {
        buttonAnimated
    },
    data() {
        return {
            user: {
                email: '',
                psw: '',
                confirmPsw: ''
            },
            errors: {
                email: '',
                psw: '',
                confirmPsw: ''
            }
        };
    },
    methods: {
        signup() {
            if (!this.validate()) {
                return;
            }

            this.axios
                .post(urls.users, this.user)
                // eslint-disable-next-line
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
                psw: '',
                confirmPsw: ''
            };

            if (!this.user.email || this.user.email.length <= 0) {
                this.errors.email = this.$i18n.t('forms.errors.emailIsEmpty');
                isValid = false;
            }

            if (!this.user.psw) {
                this.errors.psw = this.$i18n.t('forms.errors.pswIsEmpty');
                isValid = false;
            }

            if (5 >= this.user.psw.length) {
                this.errors.psw = this.$i18n.t('forms.errors.pswIsTooShort');
                isValid = false;
            }

            if (this.user.psw != this.user.confirmPsw) {
                this.errors.confirmPsw = this.$i18n.t(
                    'forms.errors.pswAreNotMatched'
                );
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

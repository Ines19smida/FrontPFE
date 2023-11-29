<template>
    <button type="button" class="btn btn-orange btn-sm me-2" data-bs-toggle="modal" data-bs-target="#modal-login" >
        Je connecte
    </button>

    <div class="modal fade" id="modal-login" tabindex="-1" aria-labelledby="modal-login-label" aria-hidden="true" data-bs-backdrop="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit="submitForm">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal-login-label">Connexion</h5>
                        <button type="button"  ref="modalLoginClose" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div v-if="errorMessage" class="alert alert-danger">
                            {{errorMessage}}
                        </div>
                        <div class="mb-2">
                            <label for="loginEmail" class="form-label">
                                Adresse e-mail
                            </label>
                            <input class="form-control" type="email" id="loginEmail" v-model="email">
                        </div>
                        <div class="mb-2">
                            <label for="loginPassword">
                                Mot de passe
                            </label>
                            <input class="form-control" type="password" id="loginPassword" v-model="password">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary">Se connecter</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    #modal-login {
        .modal-dialog {
            margin-right: 16px;
            margin-top: 86px;
        }
    }
</style>
<script>
    import $ from "jquery"
    import router from '@/router'
    export default {
        data() {
            return {
                email: null,
                password: null,
                errorMessage: null
            }
        },
        methods:{
            submitForm(e){
                e.stopPropagation()
                e.preventDefault()
                let my = this
                my.$user.login({
                    adresseEmail:my.email,
                    MotDePasse:my.password
                }, function () {
                    $(my.$refs.modalLoginClose).click()
                    router.replace({ path: '/profil' })
                }, my)
                return false
            }
        }
    }
</script>
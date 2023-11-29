<template>
    <MaHeader />
    <div class="container d-flex flex-column justify-content-center py-5 pt-10">
        <div class="row">
            <div class="col-md-6 d-md-flex d-none justify-content-center">
                <div class="m-auto image">
                    <img class="img-fluid" src="../../src/assets/InscritImage.svg" >
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="card card-registration-form">
                    <div class="card-body">
                        <h1 class="card-title text-center mb-3">Inscription</h1>
                        <div class="d-flex justify-content-center mb-3">
                            <hr class="w-25" />
                        </div>
                        <form @submit="submitForm">
                            <div class="row">
                                <div class="mb-2 col-md-6">
                                    <label for="name" class="form-label">Nom</label>
                                    <input type="text" class="form-control" :class="{ 'is-invalid': errors.nom}" id="name" v-model="nom">
                                    <div v-if="errors.nom" class="invalid-feedback">
                                        {{errors.nom[0]}}
                                    </div>
                                </div>
                                <div class="mb-2 col-md-6">
                                    <label class="form-label" for="pré">Prénom</label>
                                    <input class="form-control" :class="{ 'is-invalid': errors.prenom}" type="text" id="pré" v-model="prenom">
                                    <div v-if="errors.prenom" class="invalid-feedback">
                                        {{errors.prenom[0]}}
                                    </div>
                                </div>
                            </div>
                            <div class="mb-2">
                                <label class="form-label" for="num">Numéro de téléphone</label>
                                <input class="form-control" :class="{ 'is-invalid': errors.numTel}" type="tel" id="num" v-model="numtel">
                                <div v-if="errors.numTel" class="invalid-feedback">
                                    {{errors.numTel[0]}}
                                </div>
                            </div>
                            <div class="mb-2">
                                <label class="form-label" for="add">Adresse e-mail</label>
                                <input class="form-control" :class="{ 'is-invalid': errors.adresseEmail}" type="email" id="add" v-model="email">
                                <div v-if="errors.adresseEmail" class="invalid-feedback">
                                    {{errors.adresseEmail[0]}}
                                </div>
                            </div>
                            <div class="mb-2">
                                <label class="form-label" for="pass">Mot de passe</label><br>
                                <input class="form-control" :class="{ 'is-invalid': errors.MotDePasse}" type="password" id="pass" v-model="password">
                                <div v-if="errors.MotDePasse" class="invalid-feedback">
                                    {{errors.MotDePasse[0]}}
                                </div>
                            </div>
                            <div class="mb-2">
                                <label class="form-label" for="conf">Confirmer Mot de passe</label>
                                <input class="form-control" :class="{ 'is-invalid': errors.MotDePasse}" type="password" id="conf" v-model="confirmermdp">
                                <div v-if="errors.MotDePasse" class="invalid-feedback">
                                    {{errors.MotDePasse[0]}}
                                </div>
                            </div>
                            <label class="form-label" >
                                Type
                            </label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="type"  id="type-recruteur" value="recruteur" v-model="type">
                                <label class="form-check-label" for="type-recruteur">
                                    Recruteur
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="type" id="type-candidat" value="candidat" v-model="type">
                                <label class="form-check-label" for="type-candidat">
                                    Candidat
                                </label>
                            </div>
                            <div class="my-3">
                                <button class="btn btn-primary float-end">S'inscrire</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MaFooter />
</template>
<style>
</style>
<script>
    import $ from "jquery"
    import MaHeader from './elements/MaHeader'
    import MaFooter from "./elements/MaFooter";
    import router from "@/router";
    export default {
        data(){
            return{
                nom:null,
                prenom:null,
                numtel:null,
                type: 'candidat',
                email: null,
                password: null,
                confirmermdp:null,
                errors: []
            }
        },
        components: {
            MaHeader,
            MaFooter,
        },
        methods:{
            submitForm(e){
                e.stopPropagation()
                e.preventDefault()
                let my = this
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/inscrire',
                    dataType: "json",
                    data:{
                        nom:my.nom,
                        prenom:my.prenom,
                        numTel:my.numtel,
                        adresseEmail:my.email,
                        MotDePasse:my.password,
                        type:my.type,
                        MotDePasse_confirmation:my.confirmermdp
                    },
                    method: 'POST',
                    success(){
                        my.$user.login({
                            adresseEmail:my.email,
                            MotDePasse:my.password
                        }, function () {
                            router.replace({ path: '/profil' })
                        })
                    },
                    error(jqXHR){
                        my.errors = jqXHR.responseJSON.errors
                    }
                })
                return false
            }
        }
    }
</script>
<template>
    <MaHeader v-if="offerID"/>
    <div v-if="offerID" class="container d-flex flex-column justify-content-center py-5 pt-10">
        <div class="row">
            <div class="col-md-6 d-md-flex d-none justify-content-center">
                <div class="m-auto">
                    <img class="img-fluid" src="../assets/editImage.svg" >
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="card card-registration-form">
                    <div class="card-body">
                        <h1 class="card-title text-center mb-3">Modifier une offre</h1>
                        <div class="d-flex justify-content-center mb-3">
                            <hr class="w-25" />
                        </div>
                        <form @submit="submitForm">
                            <div class="mb-2">
                                <label for="name" class="form-label">Sujet</label>
                                <input type="text" class="form-control" :class="{ 'is-invalid': errors.sujet}" id="name" v-model="sujet">
                                <div v-if="errors.sujet" class="invalid-feedback">
                                    {{errors.sujet[0]}}
                                </div>
                            </div>
                            <div class="mb-2">
                                <label class="form-label" for="pré">Description</label>
                                <textarea class="form-control" :class="{ 'is-invalid': errors.description}" id="pré" v-model="description">
                                </textarea>
                                <div v-if="errors.description" class="invalid-feedback">
                                    {{errors.description[0]}}
                                </div>
                            </div>

                            <div class="mb-2">
                                <label class="form-label" for="pass">Date de début</label><br>
                                <input class="form-control" :class="{ 'is-invalid': errors.dateDeDebut}" type="date" id="pass" v-model="datedebut">
                                <div v-if="errors.dateDeDebut" class="invalid-feedback">
                                    {{errors.dateDeDebut[0]}}
                                </div>
                            </div>

                            <div class="mb-2">
                                <label class="form-label">Télétravail</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" v-model="teletravail" value="Oui" id="teletravail-1">
                                    <label class="form-check-label" for="teletravail-1">
                                        Oui
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" v-model="teletravail" value="Non" id="teletravail-2">
                                    <label class="form-check-label" for="teletravail-2">
                                        Non
                                    </label>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-2">
                                        <label for="competence-id">Competence</label>
                                        <select id="competence-id" class="form-control" v-model="competence_id" required="required">
                                            <option value="">Choisissez une compétence</option>
                                            <option v-for="option in cvOptions.competences" :key="option.id" :value="option.id">{{option.designation}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-2">
                                        <label for="langue-id">Langue</label>
                                        <select id="langue-id" class="form-control" v-model="langue_id" required="required">
                                            <option value="">Choisissez une langue</option>
                                            <option v-for="option in cvOptions.langues" :key="option.id" :value="option.id">{{option.designation}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-2">
                                        <label for="ville-id">Ville</label>
                                        <select id="ville-id" class="form-control" v-model="ville_id" required="required">
                                            <option value="">Choisissez une ville</option>
                                            <option v-for="option in cvOptions.ville" :key="option.id" :value="option.id">{{option.designation}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-2">
                                        <label for="experience-id">Experience</label>
                                        <select id="experience-id" class="form-control" v-model="experience_id" required="required">
                                            <option value="">Choisissez une expérience</option>
                                            <option v-for="option in cvOptions.experiences" :key="option.id" :value="option.id">{{option.designation}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-2">
                                        <label for="niveauetude-id">Niveau etude</label>
                                        <select id="niveauetude-id" class="form-control" v-model="niveauetude_id" required="required">
                                            <option value="">Choisissez votre niveau d'études</option>
                                            <option v-for="option in cvOptions.niveauEtudes" :key="option.id" :value="option.id">{{option.designation}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-2">
                                        <label for="formation-id">Formation</label>
                                        <select id="formation-id" class="form-control" v-model="formation_id" required="required">
                                            <option value="">Choisissez votre formation</option>
                                            <option v-for="option in cvOptions.formations" :key="option.id" :value="option.id">{{option.designation}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="my-3">
                                <button class="btn btn-primary float-end">Modifier</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MaFooter v-if="offerID"/>
</template>
<script>
    import $ from "jquery"
    import MaHeader from './elements/MaHeader'
    import MaFooter from "./elements/MaFooter"
    import router from '@/router'
    export default {
        data(){
            return{
                offerID: null,
                sujet:null,
                description:null,
                datedebut: null,
                teletravail:null,
                errors: [],
                userId: null,
                competence_id: '',
                langue_id: '',
                ville_id: '',
                experience_id: '',
                niveauetude_id: '',
                formation_id: '',
                cvOptions: {}
            }
        },
        components: {
            MaHeader,
            MaFooter,
        },
        mounted: function () {
            this.$nextTick(function () {
                const my = this
                let token = my.$cookies.get('token')
                if (token != null) {
                    $.ajax({
                        url: 'http://127.0.0.1:8000/api/offre/edit/form',
                        dataType: "json",
                        method: 'GET',
                        data:{
                            offreId: my.$route.params.id
                        },
                        headers:{
                            "authorization": "Bearer " + token
                        },
                        success(data){
                            my.sujet = data.sujet
                            my.description= data.description
                            my.experience = data.experience
                            my.niveauetude=data.niveauEtude
                            my.datedebut = data.dateDeDebut
                            my.localisation = data.localisation
                            my.teletravail = data.teletravail
                            my.userId = data.user_id
                            my.competence_id = data.competence_id
                            my.langue_id = data.langue_id
                            my.ville_id = data.ville_id
                            my.experience_id = data.experience_id
                            my.niveauetude_id = data.niveauetude_id
                            my.formation_id = data.formation_id
                            my.offerID = data.id
                        },
                        error() {
                            my.$cookies.set('errorMessage', 'vous ne pouvez pas modifier cette offre')
                            router.replace({ path: '/profil' })
                        }
                    })
                }
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/cv-options',
                    dataType: "json",
                    method: 'GET',
                    success(data) {
                        my.cvOptions = data
                    }
                })
            })
        },
        methods: {
            submitForm(e){
                e.stopPropagation()
                e.preventDefault()
                let my = this
                let token = my.$cookies.get('token')
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/modifier/' + my.offerID,
                    dataType: "json",
                    method: 'PUT',
                    data:{
                        sujet:my.sujet,
                        description:my.description,
                        dateDeDebut:my.datedebut,
                        localisation:my.localisation,
                        teletravail:my.teletravail,
                        user_id:my.userId,
                        competence_id: my.competence_id,
                        langue_id: my.langue_id,
                        ville_id: my.ville_id,
                        experience_id: my.experience_id,
                        niveauetude_id: my.niveauetude_id,
                        formation_id: my.formation_id,
                    },
                    headers:{
                        "authorization": "Bearer " + token
                    },
                    success(){
                        router.replace({ path: '/profil' })
                    }
                })
                return false
            }
        }
    }
</script>
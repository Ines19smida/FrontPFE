<template>
    <MaHeader/>
    <div class="container d-flex flex-column justify-content-center py-5 pt-10">
        <div class="card card-registration-form">
            <div class="card-body">
                <h1 class="card-title text-center mb-3">Postulation</h1>
                <div class="d-flex justify-content-center mb-3">
                    <hr class="w-25" />
                </div>
                <form @submit="submitForm">
                    <div class="row">
                        <div class="mb-2 col-md-6">
                            <label for="name" class="form-label">Nom</label>
                            <input type="text" class="form-control" id="name" v-model="nom">
                        </div>
                        <div class="mb-2 col-md-6">
                            <label class="form-label" for="pré">Prénom</label>
                            <input class="form-control" type="text" id="pré" v-model="prenom">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="mb-2">
                                <label class="form-label" for="num">Numéro de téléphone</label>
                                <input class="form-control" type="tel" id="num" v-model="numTel">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mb-2">
                                <label class="form-label" for="add">Adresse e-mail</label>
                                <input class="form-control" type="email" id="add" v-model="email">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="mb-2">
                                <label class="form-label" for="pass">Addresse</label><br>
                                <input class="form-control" type="text" id="pass" v-model="adresse">
                            </div>
                        </div>
                    </div>
                    <hr class="mx-5" />
                    <div class="mb-2">
                        <label class="form-label" for="lettremotivation">Lettre de motivation</label>
                        <textarea id="lettremotivation" class="form-control" v-model="lettremotivation"/>
                    </div>
                    <hr class="mx-5" />
                    <div class="accordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-cv" aria-expanded="true" aria-controls="collapseOne">
                                    Remplir le CV
                                </button>
                            </h2>
                            <div id="accordion-cv" class="accordion-collapse collapse" aria-labelledby="headingOne">
                                <div class="accordion-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="mb-2">
                                                <label for="competence-id">Competence</label>
                                                <select id="competence-id" class="form-control" v-model="cv.competence_id" required="required">
                                                    <option value="">Choisissez une compétence</option>
                                                    <option v-for="option in cvOptions.competences" :key="option.id" :value="option.id">{{option.designation}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="mb-2">
                                                <label for="langue-id">Langue</label>
                                                <select id="langue-id" class="form-control" v-model="cv.langue_id" required="required">
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
                                                <select id="ville-id" class="form-control" v-model="cv.ville_id" required="required">
                                                    <option value="">Choisissez une ville</option>
                                                    <option v-for="option in cvOptions.ville" :key="option.id" :value="option.id">{{option.designation}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="mb-2">
                                                <label for="experience-id">Experience</label>
                                                <select id="experience-id" class="form-control" v-model="cv.experience_id" required="required">
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
                                                <select id="niveauetude-id" class="form-control" v-model="cv.niveauetude_id" required="required">
                                                    <option value="">Choisissez votre niveau d'études</option>
                                                    <option v-for="option in cvOptions.niveauEtudes" :key="option.id" :value="option.id">{{option.designation}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="mb-2">
                                                <label for="formation-id">Formation</label>
                                                <select id="formation-id" class="form-control" v-model="cv.formation_id" required="required">
                                                    <option value="">Choisissez votre formation</option>
                                                    <option v-for="option in cvOptions.formations" :key="option.id" :value="option.id">{{option.designation}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-3">
                        <button class="btn btn-primary float-end">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <MaFooter/>
</template>
<script>
    import MaHeader from "@/components/elements/MaHeader"
    import MaFooter from "@/components/elements/MaFooter";
    import $ from "jquery";
    import router from "@/router";
    export default {
        data() {
            return {
                cv: {
                    competence_id: '',
                    langue_id: '',
                    ville_id: '',
                    experience_id: '',
                    niveauetude_id: '',
                    formation_id: ''
                },
                cvOptions: {},
            }
        },
        mounted() {
            this.$nextTick(function () {
                let my = this
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
        components: {
            MaHeader,
            MaFooter
        },
        methods: {
        submitForm(e){
                e.stopPropagation()
                e.preventDefault()
                let my = this
                let token = my.$cookies.get('token')
                $.ajax({
                url: 'http://127.0.0.1:8000/api/condidature',
                dataType: "json",
                method: 'POST',
                data:{
                    nom:my.nom,
                    prenom:my. prenom,
                    numTel:my.numTel,
                    email:my.email,
                    adresse:my.adresse,
                    lettremotivation: my.lettremotivation,
                    offre_id: my.$route.params.id,
                    cv:my.cv
                },
                headers:{
                    "authorization": "Bearer " + token
                },
                success(){
                    router.replace({ path: '/offre/view/'+ my.$route.params.id  })
                },
                error(){
                }
                })
                return false
            }
    }
    }
</script>
<template>
    <MaHeader/>
    <img src="@/assets/image-cap.svg" class="w-100 image-offer-header">
    <div class="container">
        <div class="row mt-5">
            <div class="col-sm-4">
                <div class="card shadow">
                    <div class="card-body h-100">

                        <p class="mb-2">
                            <b><i class="fas fa-graduation-cap"></i> Niveau d'étude :</b> {{offer.niveauetude}}
                        </p>
                        <p class="mb-2">
                            <b><i class="fas fa-graduation-cap"></i> Formation :</b> {{offer.formation}}
                        </p>
                        <p class="mb-2">
                            <b><i class="fas fa-book"></i> Experience :</b> {{offer.experience}}
                        </p>
                        <p class="mb-2">
                            <b><i class="fa-solid fa-brain"></i> Compétence:</b> {{offer.competence}}
                        </p>
                        <p class="mb-2">
                            <b><i class="fa-solid fa-globe"></i> Langue :</b> {{offer.langue}}
                        </p>
                        <p class="mb-2">
                            <b><i class="fas fa-map-marker-alt"></i> Localisation :</b> {{offer.ville}}
                        </p>
                        <p class="mb-2">
                            <b><i class="fas fa-laptop-house"></i> Télétravail :</b> {{offer.teletravail}}
                        </p>
                        <p class="mb-2">
                            <b><i class="fas fa-calendar-alt"></i> Date de début :</b> {{offer.datedebut}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="card shadow">
                    <div class="card-body h-100">
                        <h1 class="text-center mb-5">{{ offer.sujet }}</h1>
                        <h4>Description de l'emploi</h4>
                        <p>
                            {{ offer.description }}
                        </p>
                    </div>
                </div>
                <div class="card shadow mt-4">
                    <div class="card-header">
                        <h3 class="card-title">Liste des candidats</h3>
                    </div>
                    <div class="card-body">
                        <div class="accordion" id="accordionCondidatures">
                            <div class="accordion-item" v-for="condidat in offer.condidatures" :key="condidat.id">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse-c-' + condidat.id" aria-expanded="false" aria-controls="collapseTwo">
                                        {{condidat.nom}} {{condidat.prenom}}
                                        <span v-if="condidat.status === 3" class="ms-5 badge bg-success">Accepté</span>
                                        <span v-if="condidat.status === 2" class="ms-5 badge bg-danger">Refusé</span>
                                        <span v-if="condidat.status === 1" class="ms-5 badge bg-info">En attente</span>
                                    </button>
                                </h2>
                                <div :id="'collapse-c-' + condidat.id" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionCondidatures">
                                    <div class="accordion-body">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <p><b>Nom :</b> {{condidat.nom}}</p>
                                            </div>
                                            <div class="col-lg-6">
                                                <p><b>Prenom :</b> {{condidat.prenom}}</p>
                                            </div>
                                            <div class="col-lg-6">
                                                <p><b>Telephone :</b> {{condidat.numTel}}</p>
                                            </div>
                                            <div class="col-lg-6">
                                                <p><b>Email:</b>{{condidat.email}}</p>
                                            </div>
                                            <div class="col-lg-6">
                                                <p><b>Competence : </b>{{condidat.cv.competence.designation}}</p>
                                            </div>
                                            <div class="col-lg-6">
                                                <p><b>Formation : </b>{{condidat.cv.formation.designation}}</p>
                                            </div>
                                            <div class="col-lg-6">
                                                <p><b>Langue : </b>{{condidat.cv.langue.designation}}</p>
                                            </div>
                                            <div class="col-lg-6">
                                                <p><b>Niveau d'étude : </b>{{condidat.cv.niveauetude.designation}}</p>
                                            </div>
                                            <div class="col-lg-6">
                                                <p><b>Ville : </b>{{condidat.cv.ville.designation}}</p>
                                            </div>
                                            <div class="col-lg-6">
                                                <p><b>Experience : </b>{{condidat.cv.experience.designation}}</p>
                                            </div>
                                        </div>
                                        <div><b>Lettre motivation</b></div>
                                        <p>
                                            {{condidat.lettremotivation}}
                                        </p>
                                        <div v-if="condidat.status === 1" class="d-flex justify-content-between">
                                            <button type="button" class="btn btn-sm btn-danger me-2" @click="changeCandidatStatus(condidat.id, 2)" >Refusée</button>
                                            <button type="button" class="btn btn-sm btn-primary" @click="changeCandidatStatus(condidat.id, 3)" >J'accepte</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-end">
                                <button class="btn btn-primary" @click="filtreCandidature" type="button">Filter Candidature</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MaFooter></MaFooter>
</template>
<style>
    .image-offer-header {
        height: 500px;
        object-fit: cover;
    }
</style>
<script>
    import MaFooter from "@/components/elements/MaFooter";
    import MaHeader from "@/components/elements/MaHeader";
    import $ from "jquery";
    import router from "@/router";
    export default {
        data() {
            return {
                offer: {
                    offerID: null,
                    sujet:null,
                    description:null,
                    experience:null,
                    niveauetude:null,
                    datedebut: null,
                    localisation: null,
                    teletravail:null,
                }
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.lead()
            })
        },
        components: {
            MaFooter,
            MaHeader
        },
        methods: {
            lead() {
                const my = this
                let offreId = my.$route.params.id
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/trouver/' + offreId,
                    dataType: "json",
                    method: 'GET',
                    success(data) {
                        console.log(data)
                        if (data.user_id != my.$user.get('id')) {
                            router.replace({ path: '/page-not-fund' })
                        }
                        my.offer.sujet = data.sujet
                        my.offer.description = data.description
                        my.offer.datedebut = data.dateDeDebut
                        my.offer.teletravail = data.teletravail
                        my.offer.userId = data.user_id
                        my.offer.offerID = data.id
                        my.offer.competence = data.competence.designation
                        my.offer.langue = data.langue.designation
                        my.offer.ville = data.ville.designation
                        my.offer.formation = data.formation.designation
                        my.offer.experience = data.experience.designation
                        my.offer.niveauetude = data.niveauetude.designation
                        my.offer.condidatures = data.condidatures || {}
                    },
                    error() {
                        my.offer = {}
                        router.replace({ path: '/page-not-fund' })
                    }
                })
            },
            changeCandidatStatus(id, status){
                const my = this
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/candidat/status-update',
                    dataType: "json",
                    method: 'POST',
                    headers: {
                        "authorization": "Bearer " + my.$cookies.get('token')
                    },
                    data: {
                        id: id,
                        status: status
                    },
                    success() {
                        my.lead()
                    }
                })
            },
            filtreCandidature(){
                const my = this
                let offreId = my.$route.params.id
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/filtrer/' + offreId,
                    dataType: "json",
                    method: 'GET',
                    headers: {
                        "authorization": "Bearer " + my.$cookies.get('token')
                    },
                    success(data) {
                        console.log(data)
                    }
                })
            }
        }
    }
</script>
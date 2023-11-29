<template>
    <MaHeader/>
    <img src="../assets/image-cap.svg" class="w-100 image-offer-header">
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
                <div class="card h-100 shadow">
                    <div class="card-body h-100">
                        <h1 class="text-center mb-5">{{ offer.sujet }}</h1>
                        <h4>Description de l'emploi</h4>
                        <p>
                            {{ offer.description }}
                        </p>
                    </div>
                    <div v-if="$user.get('type') === 'candidat'" class="card-footer bg-info bg-opacity-10">
                        <router-link :to="'/postuler/' + offer.offerID" class="btn btn-success float-end" id="post">Postuler maintenant</router-link>
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
    #post {
            background-color: #B8F2E6;
            color:black;
            border-color:black;
        }
</style>
<script>
    import MaFooter from "@/components/elements/MaFooter";
    import MaHeader from "@/components/elements/MaHeader";
    import $ from "jquery";
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
                },
                userType: 'GEST'
            }
        },
        mounted() {
            this.$nextTick(function () {
                const my = this
                let offreId = my.$route.params.id
                $.ajax({
                    url: 'http://127.0.0.1:8000/api/trouver/' + offreId,
                    dataType: "json",
                    method: 'GET',
                    success(data) {
                        my.offer.sujet = data.sujet
                        my.offer.description = data.description
                        my.offer.datedebut = data.dateDeDebut
                        my.offer.teletravail = data.teletravail
                        my.offer.userId = data.user_id
                        my.offer.experience = data.experience
                        my.offer.niveauetude = data.niveauEtude
                        my.offer.localisation = data.localisation
                        my.offer.offerID = data.id
                        my.offer.competence = data.competence.designation
                        my.offer.langue = data.langue.designation
                        my.offer.ville = data.ville.designation
                        my.offer.formation = data.formation.designation
                        my.offer.experience = data.experience.designation
                        my.offer.niveauetude = data.niveauetude.designation
                    },
                    error() {
                        my.offer = {}
                    }
                })
            })
        },
        components: {
            MaFooter,
            MaHeader
        }
    }
</script>
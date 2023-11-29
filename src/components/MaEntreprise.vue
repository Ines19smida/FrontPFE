<template>
<MaHeader/>
<div class="container py-5 pt-10">
    <CarteListe :apiUrl="apiUrl" :getData="getData" v-slot="slotProps">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-2">
                            <label class="form-label" for="keyword">Nom d'entreprise</label>
                            <input class="form-control" type="text" id="keyword" v-model="dataFiltrage.keyword" @keyup="slotProps.updateEvent">
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Recherche par catégorie</label>
                        </div>
                        <div class="mb-2 form-check">
                            <label class="form-check-label" for="vehicle1">Tunisienne</label>
                            <input class="form-check-input" type="checkbox" id="vehicle1" name="vehicle1">
                        </div>
                        <div class="mb-2 form-check">
                            <label class="form-check-label" for="vehicle2">Etrangére</label>
                            <input class="form-check-input" type="checkbox" id="vehicle2" name="vehicle2">
                        </div>
                        <div class="mb-2 form-check">
                            <label class="form-check-label" for="vehicle3">Startup</label>
                            <input class="form-check-input" type="checkbox" id="vehicle3" name="vehicle3">
                        </div>
                        <div class="mb-2 form-check">
                            <label class="form-check-label" for="vehicle4"> GE</label>
                            <input class="form-check-input" type="checkbox" id="vehicle4" name="vehicle4">
                        </div>
                        <div class="mb-2 form-check">
                            <label class="form-check-label" for="vehicle5"> ETI</label>
                            <input class="form-check-input" type="checkbox" id="vehicle5" name="vehicle5">
                        </div>
                        <div class="mb-2 form-check">
                            <label class="form-check-label" for="vehicle6">PME</label>
                            <input class="form-check-input" type="checkbox" id="vehicle6" name="vehicle6">
                        </div>
                        <div class="mb-2 form-check">
                            <label class="form-check-label" for="vehicle7">TPE</label>
                            <input class="form-check-input" type="checkbox" id="vehicle7" name="vehicle7">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                    <div class="row">
                        <div v-for="(item, index) in slotProps['items']" class="col-md-6" :key="item.id">
                            <router-link class="text-black text-decoration-none" :to="'/entreprise/profil/' + item.id">
                                <div class="card" :id="`card-${index}`">
                                    <img src="../assets/image-cap.svg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h4>{{item.prenom}} {{item.nom}}</h4>
                                        <p class="card-text">{{item.adresse}}</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
            </div>
        </div>
    </CarteListe>
</div>
<MaFooter/>
</template>
<script>
    import MaHeader from './elements/MaHeader'
    import MaFooter from "./elements/MaFooter";
    import CarteListe from "./elements/CarteListe.vue"
    export default {
        data (){
            return {
                apiUrl:'http://127.0.0.1:8000/api/recruteur',
                dataFiltrage: {}
            }
        },
        components: {
            MaHeader,
            MaFooter,
            CarteListe
        },
        methods: {
            getData() {
                return this.dataFiltrage
            }
        }
    }
</script>

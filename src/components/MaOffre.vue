<template>
        <MaHeader />
        <div class="container py-5 pt-10">
                <CarteListe :apiUrl="apiUrl" :getData="getData" v-slot="slotProps">
                        <div class="row">
                                <div class="col-md-4">
                                        <div class="card">
                                                <div class="card-body">
                                                        <div class="mb-2">
                                                                <label class="form-label" for="keyword">Keyword</label>
                                                                <input class="form-control" type="text" id="keyword" v-model="dataFiltrage.keyword" @change="slotProps.updateEvent">
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div class="col-md-8">
                                        <div class="row">
                                                <div v-for="(item, index) in slotProps['items']" class="col-md-6" :key="item.id">
                                                <router-link class="text-black text-decoration-none" :to="'/offre/view/' + item.id">
                                                        <div class="card" :id="`card-${index}`">
                                                                <img src="../assets/image-cap.svg" class="card-img-top" alt="...">
                                                                <div class="card-body">
                                                                        <h4>{{item.sujet}}</h4>
                                                                        <p class="card-text offer-description-text">{{item.description}}</p>
                                                                </div>
                                                        </div>
                                                </router-link>
                                        </div>
                                        </div>
                                        
                                </div>
                        </div>
                </CarteListe>
        </div>
        <MaFooter />
</template>
<style>
        .offer-description-text {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 100%;
        }
</style>
<script>
    import MaHeader from './elements/MaHeader'
    import MaFooter from "./elements/MaFooter"
    import CarteListe from "./elements/CarteListe.vue"
    export default {
    data() {
                    return {
                            apiUrl:'http://127.0.0.1:8000/api/offer/list',
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

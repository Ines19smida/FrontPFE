<template>
<Candidat v-if="userType === 'candidat'"></Candidat>
<Entreprise v-if="userType === 'recruteur'"></Entreprise>
</template>
<script>
    import Candidat from './Profil/Setting/Candidat'
    import Entreprise from "./Profil/Setting/Entreprise"
    import router from "@/router";
export default {
    data() {
        return {
            userType: 'GEST',
        }
    },
    components: {
        Candidat,
        Entreprise,
    },
    created() {
        this.$nextTick(function () {
            this.userType = this.$user.get('type')
            if (this.userType === 'GEST') {
                router.replace({ path: '/page-not-fund' })
            }
        })
    },
    mounted: function () {
    }
}
</script>
import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/MaHome'
import Inscription from '@/components/MaInscription'
import Entreprise from '@/components/MaEntreprise'
import Offre from '@/components/MaOffre'
import Avis from '@/components/MaAvis'
import ProfilEntreprise from '@/components/ProfilEntreprise'
import ProfilCandidat from '@/components/ProfilCandidat'
import MaProfil from '@/components/MaProfil'
import AjoutOffre from '@/components/AjoutOffre'
import EditOffre from "@/components/EditOffre"
import ConsulterOffre from "@/components/ConsulterOffre"
import MaPostuler from "@/components/MaPostuler"
import OffreCandidat from "@/components/OffreCandidat";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {   path:'/',  component:Home },
        {   path:'/inscription', name:Inscription, component:Inscription },
        {   path:'/entreprise',  component:Entreprise},
        {   path:'/offre',  component:Offre },
        {   path:'/avis',  component:Avis },
        {   path:'/entreprise/profil/:id',  component:ProfilEntreprise },
        {   path:'/candidat/profil/:id',  component:ProfilCandidat },
        {   path:'/offre/edit/:id',  component:EditOffre },
        {   path:'/offre/view/:id',  component:ConsulterOffre },
        {   path:'/profil',  component:MaProfil  },
        {   path:'/offer/add',  component:AjoutOffre },
        {   path:'/postuler/:id',  component:MaPostuler },
        {   path:'/offre/candidat/:id',  component:OffreCandidat }
    ]
})
export default router;
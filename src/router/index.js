import Vue from 'vue'
import VueRouter from 'vue-router'

import Client from '../views/Client.vue'
import Contrat from '../views/Contrat.vue'
import Site from '../views/Site.vue'
import Employe from '../views/Employe.vue'
import Tache from '../views/Tache.vue'
import Intervention from '../views/Intervention.vue'
import List_clients from '../views/List_clients.vue'
import List_contrats from '../views/List_contrats.vue'
import List_sites from '../views/List_sites.vue'
import List_employes from '../views/List_employes.vue'
import List_taches from '../views/List_taches.vue'
import Affectation_intervention from '../views/Affectation_intervention.vue'
import List_interventions from '../views/List_interventions.vue'
import InterventionDetail from '../views/InterventionDetail.vue'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'Home',
    component : Home

  },
  {
    path: '/client',
    name: 'Client',
    component: Client
  },{
    path: '/listclients',
    name: 'List_clients',
    component: List_clients
  },{
    path: '/contrat',
    name: 'Contrat',
    component: Contrat
  },{
    path: '/listcontrats',
    name: 'List_contrats',
    component: List_contrats
  },{
    path: '/site',
    name: 'Site',
    component: Site
  },
  {
    path: '/listsites',
    name: 'List_sites',
    component: List_sites
  },{
    path: '/employe',
    name: 'Employe',
    component: Employe
  },{
    path: '/listemployes',
    name: 'List_employes',
    component: List_employes
  },{
    path: '/tache',
    name: 'Tache',
    component: Tache
  },{
    path: '/listtaches',
    name: 'List_taches',
    component: List_taches
  },{
    path: '/Intervention',
    name: 'Intervention',
    component: Intervention
  },{
    path: '/Listinterventions',
    name: 'List_interventions',
    component: List_interventions
  },{
    path: '/interventiondetail/:id',
    name: 'interventiondetail',
    component: InterventionDetail
  },{
    path: '/Affectationintervention',
    name: 'Affectation_intervention',
    component: Affectation_intervention
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

<template>
<div class="uk-container uk-container-small">
    <div class="uk-card uk-card-default uk-card-large uk-card-body">


        <fieldset class="uk-fieldset uk-text-left">

            <legend class="uk-legend">Detail Intervention</legend>
            
            <p> Titre : {{interventions.titre}}</p>
            <p> Adresse du site : {{interventions.site.adresse}}</p>
            <p> Priorite : {{interventions.priorite.nom}}</p>
            <p> Date Plannification : {{interventions.dateplanification | moment("YYYY-MM-DD")}}</p>
            <p> Date Terminaison : {{interventions.dateterminaison | moment("YYYY-MM-DD")}}</p>
            <p> Heure Debut plannifier : {{interventions.heuredebutplan}}</p>
            <p> Heure Fin Plannifier : {{interventions.heurefinplan}}</p>
            <p> Terminer : <span v-if="interventions.terminee">Oui</span> <span v-else>Non</span></p>
            <div v-if="interventions.terminee">
                <hr class="uk-divider-small">
                <p> Date Debut effectuer : {{interventions.datedebut}}</p>
                <p> Date fin effectuer : {{interventions.datefin}}</p>
                <p> Heure Debut effectuer : {{interventions.heuredebuteffect}}</p>
                <p> Heure Fin effectuer : {{interventions.heurefineffect}}</p>
                <p>Travail valider : <span v-if="interventions.validee">Oui</span> <span v-else>Non</span> </p>
            </div>
                    <hr class="uk-divider-small">

            <div v-if="interventions.employes[0]">
                <div v-for="el in interventions.employes" :key="el.id">
                    <p>Employe </p>

                    <p> Nom : {{el.nom}}</p>
                    <p> Prenom : {{el.prenom}}</p>
                    <p> Email : {{el.email}}</p>
                    <hr class="uk-divider-small">

                </div>

            </div>

            <p> Commentaires : {{interventions.Commentaires}}</p>
                

        </fieldset>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'InterventionDetail',
  components: {
  },
  data(){
    return{
        interventions : [],
        msg :'',
        id : ''
    }
  },
  
  async created(){
    this.loading = true
    this.id = this.$route.params.id
    await axios.get(`https://maintenance-expert.herokuapp.com/api/intervention/employes/${this.id}`)
    .then(res =>{
        console.log(res.data)
        this.interventions = res.data
    })
    .catch(err => {
        this.msg = err
    })
    this.loading = false
  }
}
</script>
<style scoped>

</style>
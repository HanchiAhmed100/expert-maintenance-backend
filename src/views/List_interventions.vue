<template>
  <div class="uk-container ">
    <div uk-alert>
        <fieldset class="uk-fieldset">

            <legend class="uk-legend">Liste des interventions</legend>
            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-justify uk-table-divider">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Adresse du site</th>
                            <th>Priorite</th>
                            <th>Date Plannification </th>
                            <th>Date Terminaison</th>
                            <th>Heure Debut plannifier</th>
                            <th>Heure Fin Plannifier</th>
                            <th>Etat</th>
                            <th>Plus Informations</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in interventions" :key="i.id" class="uk-text-left" >
                            <td>{{i.titre}}</td>
                            <td>{{i.site.adresse}}</td>
                            <td>{{i.priorite.nom}}</td>
                            <td>{{i.dateplanification | moment("YYYY-MM-DD")}}</td>
                            <td>{{i.dateterminaison | moment("YYYY-MM-DD")}}</td>
                            <td>{{i.heuredebutplan}}</td>
                            <td>{{i.heurefinplan}}</td>
                            <td><span v-if="i.terminee">Terminer</span><span v-else> En cours </span></td>
                            <td><router-link :to="{ name : 'interventiondetail' , params : { id : i.id }}">Informations</router-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </fieldset>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'List_interventions',
  components: {
  },
  data(){
    return{
        interventions : [],
        msg :''
    }
  },
  mounted(){
    this.loading = true
    axios.get("http://localhost:8081/api/intervention")
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

<template>
  <div class="uk-container ">
    <div uk-alert>
        <fieldset class="uk-fieldset">

            <legend class="uk-legend">Liste des taches</legend>
            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-justify uk-table-divider">
                    <thead>
                        <tr>
                            <th>Reference</th>
                            <th>Nom</th>
                            <th>Duree</th>
                            <th>Prix Heure</th>
                            <th>Date Action</th>
                            <th>Titre de l'intervention</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="tache in taches" :key="tache.id" class="uk-text-left" >
                            <td>{{tache.refernce}}</td>
                            <td>{{tache.nom}}</td>
                            <td>{{tache.duree}}</td>
                            <td>{{tache.prixheure}}</td>
                            <td>{{tache.dateaction}}</td>
                            <td>{{tache.intervention.titre}}</td>
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
  name: 'List_taches',
  components: {
  },
  data(){
    return{
        taches : [],
        msg :''
    }
  },
  mounted(){
    this.loading = true
    axios.get("http://localhost:8081/api/tache")
    .then(res =>{
        console.log(res.data)
      this.taches = res.data
    })
    .catch(err => {
        this.msg = err
    })
    this.loading = false
  }
}
</script>

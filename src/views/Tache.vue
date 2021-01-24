<template>
  <div class="uk-container uk-container-small">
    <div v-if="loading" class="uk-flex">
      <span uk-spinner="ratio: 4.5"></span>
    </div>
    <div class="uk-card uk-card-default uk-card-large uk-card-body" v-else>
        <fieldset class="uk-fieldset">
            <legend class="uk-legend">Tache</legend>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Referance" v-model="refernce">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Nom" v-model="nom">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="number" placeholder="Duree" v-model="duree">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="number" placeholder="Prix heure" v-model="prixheure">
            </div>

            <div class="uk-form-horizontal">

              <div class="uk-margin">
                <label class="uk-form-label" for="form-horizontal-select">Date Action</label>
                  <div class="uk-form-controls">
                    <input class="uk-input" type="date" placeholder="Date Action" v-model="dateaction">
                  </div>  
              </div>

                <div class="uk-margin">
                    <label class="uk-form-label" for="form-horizontal-select">Intervention</label>
                    <div class="uk-form-controls">

                      <select class="uk-select"  id="form-horizontal-select" v-model="interventionId">
                        <option v-for="inter in interventions" :key="inter.id" :value="inter.id">{{ inter.titre }}</option>
                      </select>
                    </div>
                </div>
            </div>

            <button class="uk-button uk-button-secondary" v-on:click="send()">Valider</button>
            <h5 v-if="msg">{{this.msg}}</h5>
        </fieldset>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Tache',
  components: {
  },
  data(){
    return{
      loading : false,
      refernce : '',
      nom : '',
      duree : '',
      prixheure : '',
      dateaction: '',
      interventions : [],
      interventionId: '',
      msg : ''
    }
  },
  mounted(){
    this.loading = true
    axios.get("https://maintenance-expert.herokuapp.com/api/intervention")
    .then(res =>{
      this.interventions = res.data
    })
    .catch(err => {
        this.msg = err
    })
    this.loading = false
  },
  methods :{
    send : function(){
      this.loading = true
      axios.post("https://maintenance-expert.herokuapp.com/api/tache",{
        refernce : this.refernce,
        nom : this.nom,
        duree : this.duree,
        prixheure : this.prixheure,
        dateaction : this.dateaction,
        interventionId : this.interventionId
      })
      .then(res => {
        console.log(res)
        this.$router.push('listtaches') 
        this.msg = "Ajouter Tache"
      }).catch(err => {
        this.msg = err
      })
      this.loading = false
    }
  }
}
</script>

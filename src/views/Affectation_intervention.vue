<template>
  <div class="uk-container uk-container-small">
    <div class="uk-card uk-card-default uk-card-large uk-card-body">
        <fieldset class="uk-fieldset">
            <legend class="uk-legend">Affectation des employes aux Interventions </legend>

            <div class="uk-form-horizontal">
                <div class="uk-margin">
                    <label class="uk-form-label uk-text-left" for="form-horizontal-select">Titre de l'intervention</label>
                    <div class="uk-form-controls">
                        <select class="uk-select"  id="form-horizontal-select" v-model="intervention_id">
                            <option v-for="i in interventions" :key="i.id" :value="i.id">{{ i.titre }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="uk-form-horizontal">
                <div class="uk-margin">
                    <label class="uk-form-label uk-text-left" for="form-horizontal-select">Nom du employe</label>
                    <div class="uk-form-controls">
                        <select class="uk-select"  id="form-horizontal-select" v-model="employe_id">
                            <option v-for="e in employes" :key="e.id" :value="e.id">{{ e.nom }}</option>
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
  name: 'Affectation_intervention',
  components: {
  },
  data(){
    return{
        interventions : [],
        employes : [],
        employe_id : '',
        intervention_id :'',
        msg : ''
    }
  },
  mounted(){
    this.loading = true
    axios.get("http://localhost:8081/api/employe")
    .then(res =>{
      this.employes = res.data
    })
    .catch(err => {
        this.msg = err
    })
    axios.get("http://localhost:8081/api/intervention")
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
        axios.post("http://localhost:8081/api/employe/interventions",{
            intervention_id : this.intervention_id,
            employe_id : this.employe_id,
        })
        .then(res => {
            console.log(res)
            this.msg = "Affection avec sucess"
        }).catch(err => {
            console.log(err)
            this.msg = err
        })
    }
  }
}
</script>

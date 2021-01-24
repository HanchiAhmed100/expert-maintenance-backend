<template>
  <div class="uk-container uk-container-small">
    <div v-if="loading" class="uk-flex">
      <span uk-spinner="ratio: 4.5"></span>
    </div>
    <div class="uk-card uk-card-default uk-card-large uk-card-body" v-else>
        <fieldset class="uk-fieldset">
            <legend class="uk-legend">Information Contrat</legend>


            <div class="uk-form-horizontal">

              <div class="uk-margin">
                <label class="uk-form-label uk-text-left" for="form-horizontal-select">Date Debut</label>
                <div class="uk-form-controls">
                  <input class="uk-input" type="date" placeholder="Date debut" v-model="datedebut">
                </div>
              </div>

              <div class="uk-margin">
                <label class="uk-form-label uk-text-left" for="form-horizontal-select">Date Fin</label>
                <div class="uk-form-controls">
                  <input class="uk-input" type="date" placeholder="Date fin" v-model="datefin">
                </div>
            </div>
              <div class="uk-margin">
                <label class="uk-form-label uk-text-left" for="form-horizontal-select">Redevence</label>
                <div class="uk-form-controls">
              <input class="uk-input" type="number" placeholder="redevence" v-model="redevence">
                </div>
            </div>


              <div class="uk-form-horizontal">
                  <div class="uk-margin">
                      <label class="uk-form-label uk-text-left" for="form-horizontal-select">Client</label>
                      <div class="uk-form-controls">

                        <select class="uk-select"  id="form-horizontal-select" v-model="clientId">
                          <option v-for="cli in clients" :key="cli.id" :value="cli.id">{{ cli.nom }}</option>
                        </select>
                      </div>
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
  name: 'Contrat',
  components: {
  },
  data(){
    return{
      loading : false,
      datedebut : '',
      datefin : '',
      redevence : '',
      msg : '',
      clientId: '',
      clients : []
    }
  },
  mounted(){
    this.loading = true
    axios.get("https://maintenance-expert.herokuapp.com/api/client")
    .then(res =>{
      this.clients = res.data
    })
    .catch(err => {
        this.msg = err
    })
    this.loading = false
  },
  methods :{
    send : function(){
      this.loading = true
      axios.post("https://maintenance-expert.herokuapp.com/api/contrat",{
        datedebut : this.datedebut,
        datefin : this.datefin,
        redevence : this.redevence,
        clientId : this.clientId
      })
      .then(res => {
        console.log(res)
        this.$router.push('listcontrats')
        this.msg = "Contrat ajouter"
      }).catch(err => {
        this.msg = err
      })
      this.loading = false
    }
  }
}
</script>

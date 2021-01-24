<template>
  <div class="uk-container uk-container-small">
    <div class="uk-card uk-card-default uk-card-large uk-card-body">
        <fieldset class="uk-fieldset">
            <legend class="uk-legend">Information Site</legend>
            <div class="uk-margin">
                <input class="uk-input" type="number" placeholder="Longitude" v-model="longitude">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="number" placeholder="Latitude" v-model="latitude">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Adresse" v-model="adresse">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Rue" v-model="rue">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="number" placeholder="Code Postal" v-model="codepostal">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Ville" v-model="ville">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Contact" v-model="contact">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Telephone Contact" v-model="telcontact">
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

            <button class="uk-button uk-button-secondary" v-on:click="send()">Valider</button>
            <h5 v-if="msg">{{this.msg}}</h5>
        </fieldset>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Client',
  components: {
  },
  data(){
    return{
      longitude : '',
      latitude : '',
      adresse : '',
      rue : '',
      codepostal : '',
      ville : '',
      contact : '',
      telcontact : '',
      loading :false,
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
      axios.post("https://maintenance-expert.herokuapp.com/api/site",{
        longitude : this.longitude,
        latitude : this.latitude,
        adresse : this.adresse,
        rue : this.rue,
        codepostal : this.codepostal,
        ville : this.ville,
        contact : this.contact,
        telcontact : this.telcontact,
        clientId : this.clientId

      })
      .then(res => {
        console.log(res)
        this.$router.push('listsites') 
        this.msg = "Site ajouter"
      }).catch(err => {
        this.msg = err
      })
    }
  }
}
</script>

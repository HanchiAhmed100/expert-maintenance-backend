<template>
  <div class="uk-container uk-container-small">
    <div class="uk-card uk-card-default uk-card-large uk-card-body">
        <fieldset class="uk-fieldset">
            <legend class="uk-legend">Information client</legend>
            <div class="uk-margin">
                <input class="uk-input" type="text" placeholder="Nom" v-model="nom">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Adresse" v-model="adresse">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Tel" v-model="tel">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Fax" v-model="fax">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Email" v-model="email">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Contact" v-model="contact">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Telphone contact" v-model="telcontact">
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
      nom : '',
      adresse : '',
      tel : '',
      fax : '',
      email : '',
      contact : '',
      telcontact : '',
      loading :false,
      msg : ''
    }
  },
  methods :{
    send : function(){
      axios.post("http://localhost:8081/api/client",{
        nom : this.nom,
        adresse : this.adresse,
        tel : this.tel,
        fax : this.fax,
        email : this.email,
        contact : this.contact,
        telcontact : this.telcontact
      })
      .then(res => {
        console.log(res)
        this.msg = "Contact ajouter"
        this.$router.push('listclients')

      }).catch(err => {
        this.msg = err
      })
    }
  }
}
</script>

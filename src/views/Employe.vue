<template>
  <div class="uk-container uk-container-small">
    <div class="uk-card uk-card-default uk-card-large uk-card-body">
        <fieldset class="uk-fieldset">
            <legend class="uk-legend">Ajouter un employe</legend>
            <div class="uk-margin">
                <input class="uk-input" type="text" placeholder="Login" v-model="login">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="password" placeholder="Mot de passe" v-model="pwd">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Prenom" v-model="prenom">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Nom" v-model="nom">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Email" v-model="email">
            </div>

              <div class="uk-form-horizontal">
                  <div class="uk-margin">
                      <label class="uk-form-label uk-text-left" for="form-horizontal-select">Actif</label>
                      <div class="uk-form-controls">

                        <select class="uk-select" id="form-stacked-select"  v-model="actif">
                            <option value="true">Oui</option>
                            <option value="false">Non</option>
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
  name: 'Employe',
  components: {
  },
  data(){
    return{
      login : '',
      pwd : '',
      nom : '',
      prenom : '',
      email : '',
      actif : false,
      loading : false,
      msg : '',
    }
  },
  methods :{
    send : function(){
      axios.post("http://localhost:8081/api/employe",{
        login : this.login,
        pwd : this.pwd,
        nom : this.nom,
        prenom : this.prenom,
        email : this.email,
        actif : true,
      })
      .then(res => {
        console.log(res)
        this.msg = "Employe ajouter"
      }).catch(err => {
        this.msg = err
      })
    }
  }
}
</script>

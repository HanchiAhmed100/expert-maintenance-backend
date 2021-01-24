<template>
  <div class="uk-container uk-container-small">
    <div class="uk-card uk-card-default uk-card-large uk-card-body">
        <fieldset class="uk-fieldset">

          <div class="uk-form-horizontal">

            <legend class="uk-legend">Intervention</legend>
            <div class="uk-margin">
                <input class="uk-input" type="text" placeholder="Titre" v-model="titre">
            </div>

            <div class="uk-form-horizontal">
              <div class="uk-margin">
                <label class="uk-form-label uk-text-left" for="form-horizontal-select">Date Planifier</label>
                <div class="uk-form-controls">
                  <input class="uk-input" type="date" placeholder="Date Debut" v-model="dateplanification">
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label uk-text-left" for="form-horizontal-select">Date Terminaison</label>
                <div class="uk-form-controls">
                  <input class="uk-input" type="date" placeholder="Date Fin" v-model="dateterminaison">
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label uk-text-left" for="form-horizontal-select">Heure debut</label>
                <div class="uk-form-controls">
                  <input class="uk-input" type="time" placeholder="Heure debut" v-model="heuredebutplan">
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label uk-text-left" for="form-horizontal-select">Heure fin</label>
                <div class="uk-form-controls">
                  <input class="uk-input" type="time" placeholder="Heure fin" v-model="heurefinplan">
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label uk-text-left" for="form-horizontal-select">Site</label>
                <div class="uk-form-controls">
                      <select class="uk-select" id="form-stacked-select"  v-model="siteId">
                          <option v-for="site in sites" :key="site.id" :value="site.id">{{ site.adresse +" "+site.rue +" "+site.ville +" "+site.codepostal+" " }}</option>
                      </select>
                  </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label uk-text-left" for="form-horizontal-select">Priorite</label>
                <div class="uk-form-controls">
                      <select class="uk-select" id="form-stacked-select"  v-model="PrioriteId">
                          <option value="1">Elevé</option>
                          <option value="1">Moyenne</option>
                          <option value="1">Faible</option>
                      </select>
                  </div>
              </div>
          </div>
                    </div>
            <div class="uk-margin">
                <textarea class="uk-textarea" rows="5" placeholder="Commentaire ..." v-model="commentaires"></textarea>
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
  name: 'Intervention',
  components: {
  },
  data(){
    return{
      titre : '',
      dateplanification : '',
      dateterminaison : '',
      heuredebutplan : '',
      heurefinplan : '',
      commentaires : '',
      sites: [],
      siteId :'',
      PrioriteId : "",
      msg : ''
    }
  },
  mounted(){
    this.loading = true
    axios.get("http://localhost:8081/api/site")
    .then(res =>{
      this.sites = res.data
    })
    .catch(err => {
        this.msg = err
    })
    this.loading = false
  },
  methods :{
    send : function(){
      axios.post("http://localhost:8081/api/Intervention",{
        titre : this.titre,
        dateplanification : this.dateplanification,
        dateterminaison : this.dateterminaison,
        heuredebutplan : this.heuredebutplan,
        heurefinplan : this.heurefinplan,
        commentaires : this.commentaires,
        siteId : this.siteId,
        prioriteId : this.PrioriteId,
        terminee : false

      })
      .then(res => {
        console.log(res)
        this.msg = "Intervention ajouter"
        this.$router.push('Listinterventions')

      }).catch(err => {
        this.msg = err
      })
    }
  }
}
</script>

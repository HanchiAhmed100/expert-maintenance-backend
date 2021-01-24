<template>
  <div class="uk-container ">
    <div uk-alert>
        <fieldset class="uk-fieldset">

            <legend class="uk-legend">Liste des contrats</legend>
            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-justify uk-table-divider">
                    <thead>
                        <tr>
                            <th>Client</th>
                            <th>Date debut</th>
                            <th>Date Fin</th>
                            <th>Redevence</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ele in contrats" :key="ele.id" class="uk-text-left" >
                          <td>{{ele.client.nom}}</td>
                          <td>{{ele.datedebut}}</td>
                          <td>{{ele.datefin}}</td>
                          <td>{{ele.redevence}}</td>
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
  name: 'List_clients',
  components: {
  },
  data(){
    return{
        contrats : [],

        msg :''
    }
  },
  mounted(){
    this.loading = true
    axios.get("https://maintenance-expert.herokuapp.com/api/contrat")
    .then(res =>{
        console.log(res.data)
      this.contrats = res.data
    })
    .catch(err => {
        this.msg = err
    })
    this.loading = false
  }
}
</script>

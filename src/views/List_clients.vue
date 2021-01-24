<template>
  <div class="uk-container ">
    <div uk-alert>
        <fieldset class="uk-fieldset">


            <legend class="uk-legend">Liste des clients</legend>
            

            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-justify uk-table-divider">
                    <thead>
                        <tr>
                            <th class="uk-width-small">Nom et prenom</th>
                            <th>Adresse</th>
                            <th>Telephone</th>
                            <th>Fax</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Telcontact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ele in clients" :key="ele.id" class="uk-text-left" >
                            <td>{{ele.nom}}</td>
                            <td>{{ele.adresse}}</td>
                            <td>{{ele.tel}}</td>
                            <td>{{ele.fax}}</td>
                            <td>{{ele.email}}</td>
                            <td>{{ele.contact}}</td>
                            <td>{{ele.telcontact}}</td>
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
        clients : [],
        msg : ''
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
  }
}
</script>

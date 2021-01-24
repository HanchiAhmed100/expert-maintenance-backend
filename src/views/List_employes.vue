<template>
  <div class="uk-container ">
    <div uk-alert>
        <fieldset class="uk-fieldset">

            <legend class="uk-legend">Liste des contrats</legend>
            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-justify uk-table-divider">
                    <thead>
                        <tr>
                            <th>Login</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Email</th>
                            <th>Etat</th>
                            <th>Depuis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="employe in employes" :key="employe.id" class="uk-text-left" >
                            <td>{{employe.login}}</td>
                            <td>{{employe.nom}}</td>
                            <td>{{employe.prenom}}</td>
                            <td>{{employe.email}}</td>
                            <td v-if="employe.actif">Actif</td><td v-else>Inactif</td>
                            <td>{{employe.createdAt | moment("YYYY-MM-DD")}} </td>
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
  name: 'List_employes',
  components: {
  },
  data(){
    return{
        employes : [],
        msg :''
    }
  },
  mounted(){
    this.loading = true
    axios.get("http://localhost:8081/api/employe")
    .then(res =>{
        console.log(res.data)
        this.employes = res.data
    })
    .catch(err => {
        this.msg = err
    })
    this.loading = false
  }
}
</script>

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
                            <th>Longitue</th>
                            <th>Latitude</th>
                            <th>Adresse</th>
                            <th>Rue</th>
                            <th>Code Postal</th>
                            <th>Ville</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="site in sites" :key="site.id" class="uk-text-left" >
                            <td>{{site.client.nom}}</td>
                            <td>{{site.longitude}}</td>
                            <td>{{site.latitude}}</td>
                            <td>{{site.adresse}}</td>
                            <td>{{site.rue}}</td>
                            <td>{{site.codepostal}}</td>
                            <td>{{site.ville}}</td>
                            <td>{{site.contact}}</td>
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
  name: 'List_sites',
  components: {
  },
  data(){
    return{
        sites : [],
        msg :''
    }
  },
  mounted(){
    this.loading = true
    axios.get("http://localhost:8081/api/site")
    .then(res =>{
        console.log(res.data)
        this.sites = res.data
        this.$router.push('Listinterventions')

    })
    .catch(err => {
        this.msg = err
    })
    this.loading = false
  }
}
</script>

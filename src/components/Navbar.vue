<template>
    <div>
    
        <nav class="uk-navbar uk-navbar-container uk-margin">
            <div class="uk-navbar-left">
                <a class="uk-navbar-toggle" uk-toggle="target: #offcanvas-nav-primary">
                    <span uk-navbar-toggle-icon></span> <span class="uk-margin-small-left">Expert Maintenace </span>
                </a>
            </div>
        </nav>


        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
            <div class="uk-offcanvas-bar uk-flex uk-flex-column">

                <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                    <li class="uk-active"><h3>Expert Maintenace</h3></li>
                    <li class="uk-parent">
                        <ul class="uk-nav-sub" uk-accordion>
                            <li>
                                <a class="uk-accordion-title" href="#">Client & Contrat </a>
                                <div class="uk-accordion-content">
                                    <p><router-link to="/Client">Ajouter un Client</router-link></p>
                                    <p><router-link to="/listclients">Liste des Clients</router-link></p>
                                    <p><router-link to="/Contrat">Ajouter contrat</router-link></p>
                                    <p><router-link to="/listcontrats">Liste des contrats</router-link></p>
                                    <p><router-link to="/site">Ajouter un site</router-link></p>
                                    <p><router-link to="/listsites">Liste des sites</router-link></p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">Employe</a>
                                <div class="uk-accordion-content">
                                    <p><router-link to="/employe">Ajouter un Employe</router-link></p>
                                    <p><router-link to="/Listemployes">Liste des Employe</router-link></p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">Intervention</a>
                                <div class="uk-accordion-content">
                                    <p><router-link to="/Intervention">Ajouter Intervention</router-link></p>
                                    <p><router-link to="/Affectationintervention">Affectation des Interventions</router-link></p>
                                    <p><router-link to="/Listinterventions">Liste des Interventions</router-link></p>
                                    <p><router-link to="/Tache">Affectation des Taches</router-link></p>
                                    <p><router-link to="/listtaches">Liste des Taches</router-link></p>
                                </div>
                            </li>                        
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>

export default {

  name: 'Navbar',
  components: {

  }
}
</script>

<style>

</style>
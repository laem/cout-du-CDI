import {range} from './helpers.js'

let input = {
  effectif_entreprise: 1,
  type_sal: 'prive_non_cadre',
  salaire_de_base: 2301,
  contrat_de_travail: 'temps_plein',
  heures_remunerees_volume: 130,
  allegement_fillon_mode_recouvrement: 'anticipe_regularisation_fin_de_periode',
  allegement_cotisation_allocations_familiales_mode_recouvrement: 'anticipe_regularisation_fin_de_periode',
  contrat_de_travail_debut: '2016-03'
},
url = 'https://openfisca-embauche.sgmap.fr/api/2/formula/2016-03/salaire_net?'

let ici = document.querySelector('#ici')
range(1467, 1470).map(n => {
  let input = Object.assign({}, input, {salaire_de_base: n})
  let urlParameters = Object.keys(input).map(key => `${key}=${input[key]}`).join('&')
  fetch(url + urlParameters)
    .then(response => response.json())
    .then(json => ici.innerHTML += json.values.salaire_net.toFixed(2))
})

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
}

let ici = document.querySelector('#ici')
range(1467, 1470).map(n => ici.innerHTML += ` ${n} |`)

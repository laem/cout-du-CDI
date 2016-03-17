import {range} from './helpers.js'
import MG from 'metrics-graphics'
import 'metrics-graphics/dist/metricsgraphics.css'

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
url = 'https://openfisca-embauche.sgmap.fr/api/2/formula/2016-03/salaire_net+cout_du_travail?'

let data = []

range(1467, 1500).map(base => {
  let input = Object.assign({}, input, {salaire_de_base: base})
  let urlParameters = Object.keys(input).map(key => `${key}=${input[key]}`).join('&')
  fetch(url + urlParameters)
    .then(response => response.json())
    .then(json => data.push({
      cout: +json.values.cout_du_travail / +json.values.salaire_net,
      net: +json.values.salaire_net
    })
    )
})

setTimeout(() => {
  console.log(data)
  MG.data_graphic({
        title: "Axis Labels",
        description: "A graphic where we're not plotting dates on the x-axis and where the axes include labels and the line animates on load. We've also enabled extended ticks along the y-axis.",
        data: data,
        animate_on_load: true,
        area: false,
        width: 1000,
        height: 600,
        right: 40,
        left: 90,
        bottom: 50,
        y_extended_ticks: true,
        target: '#ici',
        x_accessor: 'net',
        y_accessor: 'cout',
        x_label: 'salaire net',
        y_label: 'coût du travail',
        show_tooltips: false
    })
  }, 10000)

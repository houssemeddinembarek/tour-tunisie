const mongoose = require("mongoose");

const SiteSchema = mongoose.Schema({
  name_ar: {
    type: String,
  },
  name_fr: {
    type: String,
  },
  name_en: {
    type: String,
  },
  ville: {
    type: String,
  },
  ville_ar: {
    type: String,
  },
  region: {
    type: String,
  },
  gouvernorat: {
    type: String,
  },
  gouvernorat_ar: {
    type: String,
  },
  lat: {
    type: String,
  },
  long: {
    type: String,
  },
  type: {
    type: String,
  },
  date_construction: {
    type: String,
  },
  description_ar: {
    type: String,
  },
  description_fr: {
    type: String,
  },
  description_en: {
    type: String,
  },
  horaire_hiver: {
    type: String,
  },
  horaire_ete: {
    type: String,
  },
  horaire_ramadan: {
    type: String,
  },
  jour_ferm: {
    type: String,
  },
  heur_ferm: {
    type: String,
  },
  image360: {
    type: String,
  },
  panoramaPhoto: {
    type: Boolean,
  },
  ar_exist: {
    type: Boolean,
  },
  epoque: {
    type: String,
  },
  images: {
    type: String,
  },
  patrimoine: {
    type: Boolean,
  },
  pm_ens: {
    type: Boolean,
  },
  ticket_group: {
    type: Boolean,
  },
  source_ar: {
    type: String,
  },
  source_fr: {
    type: String,
  },
  source_en: {
    type: String,
  },
  frais_resident: {
    type: String,
  },
  frais_etranger: {
    type: String,
  },
  tel: {
    type: String,
  },
  commodite: {
    type: String,
  },
  monument: [
    {
      name_ar: {
        type: String,
      },
      name_fr: {
        type: String,
      },
      name_en: {
        type: String,
      },
      lat: {
        type: String,
      },
      long: {
        type: String,
      },
      type: {
        type: String,
      },

      image: {
        type: String,
      },
    },
  ],
  reclamations: [
    {
      monthArray: [
        {
          dateArray:[
            {
              recs:[
                {
                  idsite: {
                    type: String,
                  },
                  description: {
                    type: String,
                  },
                  title: {
                    type: String,
                  },
                  email: {
                    type: String,
                  },
                  nomUser: {
                    type: String,
                  },
                  date: {
                    type: String,
                  },
                },
              ],
              date:{
                type: String
              }
            }
          ],
          month: {
            type: String,
          },
        },
      ],
      year: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("site", SiteSchema);

const express = require("express");
const router = express.Router();

const Site = require("../models/sites");

router.get("/", async (req, res) => {
  try {
    const sites = await Site.find();
    res.json(sites);
  } catch (err) {
    res.send("err" + err);
  }
});

router.get("/region/:rg", async (req, res) => {
  var query = { region: req.params.rg };
  try {
    const sites = await Site.find(query);
    res.json(sites);
  } catch (err) {
    res.send("err" + err);
  }
});

router.get("/epoque/:ep", async (req, res) => {
  var regex = RegExp(".*" + req.params.ep + ".*");
  var query = { epoque: regex };
  try {
    const sites = await Site.find(query);
    res.json(sites);
  } catch (err) {
    res.send("err" + err);
  }
});

router.get("/patrimoine/:pat", async (req, res) => {
  var query = { patrimoine: req.params.pat };
  try {
    const sites = await Site.find(query);
    res.json(sites);
  } catch (err) {
    res.send("err" + err);
  }
});
router.get("/ens/:pens", async (req, res) => {
  var query = { pm_ens: req.params.pens };
  try {
    const sites = await Site.find(query);
    res.json(sites);
  } catch (err) {
    res.send("err" + err);
  }
});
router.get("/type/:type", async (req, res) => {
  var regex = RegExp(".*" + req.params.type + ".*");
  var query = { type: regex };
  try {
    const sites = await Site.find(query);
    res.json(sites);
  } catch (err) {
    res.send("err" + err);
  }
});
router.get("/ville/:ville", async (req, res) => {
  var query = { ville: req.params.ville };
  try {
    const sites = await Site.find(query);
    res.json(sites);
  } catch (err) {
    res.send("err" + err);
  }
});
router.post("/typreg", async (req, res) => {
  var regex = RegExp(".*" + req.body.type + ".*");

  var query = { type: regex, region: req.body.region };
  try {
    const sites = await Site.find(query);
    res.json(sites);
  } catch (err) {
    res.send("err" + err);
  }
});
router.post("/typep", async (req, res) => {
  var query = { type: req.body.type, epoque: req.body.epoque };
  try {
    const sites = await Site.find(query);
    res.json(sites);
  } catch (err) {
    res.send("err" + err);
  }
});
router.post("/detail", async (req, res) => {
  const sites = await Site.findById(req.body.id, function (err, spotresult) {
    if (err) console.log(err);
    //check if spot exists
    if (spotresult) {
      //response
      res.status(200).json({
        success: true,
        response: {
          site: {
            _id: spotresult._id,
            name_ar: spotresult.name_ar,
            name_fr: spotresult.name_fr,
            name_en: spotresult.name_en,
            ville: spotresult.ville,
            ville_ar: spotresult.ville_ar,
            region: spotresult.region,
            gouvernorat_ar: spotresult.gouvernorat_ar,
            lat: spotresult.lat,
            long: spotresult.long,
            type: spotresult.type,
            date_construction: spotresult.date_construction,
            description_ar: spotresult.description_ar,
            description_fr: spotresult.description_fr,
            description_en: spotresult.description_en,
            horaire_hiver: spotresult.horaire_hiver,
            horaire_ete: spotresult.horaire_ete,
            horaire_ramadan: spotresult.horaire_ramadan,
            jour_ferm: spotresult.jour_ferm,
            heur_ferm: spotresult.heur_ferm,
            epoque: spotresult.epoque,
            images: spotresult.images,
            image360: spotresult.image360,
            panoramaPhoto: spotresult.panoramaPhoto,
            ar_exist: spotresult.ar_exist,
            patrimoine: spotresult.patrimoine,
            pm_ens: spotresult.pm_ens,
            ticket_group: spotresult.ticket_group,
            source_ar: spotresult.source_ar,
            source_fr: spotresult.source_fr,
            source_en: spotresult.source_en,
            frais_resident: spotresult.frais_resident,
            frais_etranger: spotresult.frais_etranger,
            tel: spotresult.tel,
            commodite: spotresult.commodite,
            monument: spotresult.monument,
            reclamations: spotresult.reclamations,
          },
        },
      });
    } else {
      //response
      res.status(400).json({ success: false, message: "spot not found" });
    }
  });
});
// router.find({type: req.body.type,epoque: req.body.epoque,}, async (req, res));
// router.find({type: req.body.type,region: req.body.region,}, async (req, res));

router.post("/post", async (req, res) => {
  console.log(req.body);
  const site = Site({
    name_ar: req.body.name_ar,
    name_fr: req.body.name_fr,
    name_en: req.body.name_en,
    ville: req.body.ville,
    ville_ar: req.body.ville_ar,
    region: req.body.region,
    gouvernorat: req.body.gouvernorat,
    gouvernorat_ar: req.body.gouvernorat_ar,
    lat: req.body.lat,
    long: req.body.long,
    type: req.body.type,
    date_construction: req.body.date_construction,
    description_ar: req.body.description_ar,
    description_fr: req.body.description_fr,
    description_en: req.body.description_en,
    horaire_hiver: req.body.horaire_hiver,
    horaire_ete: req.body.horaire_ete,
    horaire_ramadan: req.body.horaire_ramadan,
    jour_ferm: req.body.jour_ferm,
    heur_ferm: req.body.heur_ferm,
    epoque: req.body.epoque,
    images: req.body.images,
    image360: req.body.image360,
    panoramaPhoto: req.body.panoramaPhoto,
    ar_exist: req.body.ar_exist,
    patrimoine: req.body.patrimoine,
    pm_ens: req.body.pm_ens,
    ticket_group: req.body.ticket_group,
    source_ar: req.body.source_ar,
    source_fr: req.body.source_fr,
    source_en: req.body.source_en,
    frais_resident: req.body.frais_resident,
    frais_etranger: req.body.frais_etranger,
    tel: req.body.tel,
    commodite: req.body.commodite,
    monument: req.body.monument,
    reclamations: req.body.reclamations,
  });
  try {
    const a1 = await site.save();
    res.json(a1);
  } catch (err) {
    res.send("error " + err);
  }
});
router.patch("/Update/:id", getProduit, async (req, res) => {
  if (req.body.name_ar != null) {
    res.site.name_ar = req.body.name_ar;
  }
  if (req.body.name_fr != null) {
    res.site.name_fr = req.body.name_fr;
  }
  if (req.body.name_en != null) {
    res.site.name_en = req.body.name_en;
  }
  if (req.body.monument != null) {
    res.site.monument = req.body.monument;
  }

  if (req.body.source_ar != null) {
    res.site.source_ar = req.body.source_ar;
  }
  if (req.body.source_en != null) {
    res.site.source_en = req.body.source_en;
  }
  if (req.body.source_fr != null) {
    res.site.source_fr = req.body.source_fr;
  }
  if (req.body.description_ar != null) {
    res.site.description_ar = req.body.description_ar;
  }
  if (req.body.description_en != null) {
    res.site.description_en = req.body.description_en;
  }
  if (req.body.description_fr != null) {
    res.site.description_fr = req.body.description_fr;
  }
  if (req.body.ville != null) {
    res.site.ville = req.body.ville;
  }
  if (req.body.ville_ar != null) {
    res.site.ville_ar = req.body.ville_ar;
  }
  if (req.body.gouvernorat != null) {
    res.site.gouvernorat = req.body.gouvernorat;
  }
  if (req.body.gouvernorat_ar != null) {
    res.site.gouvernorat_ar = req.body.gouvernorat_ar;
  }
  if (req.body.lat != null) {
    res.site.lat = req.body.lat;
  }
  if (req.body.long != null) {
    res.site.long = req.body.long;
  }
  if (req.body.horaire_ramadan != null) {
    res.site.horaire_ramadan = req.body.horaire_ramadan;
  }
  if (req.body.horaire_hiver != null) {
    res.site.horaire_hiver = req.body.horaire_hiver;
  }
  if (req.body.horaire_ete != null) {
    res.site.horaire_ete = req.body.horaire_ete;
  }
  if (req.body.jour_ferm != null) {
    res.site.jour_ferm = req.body.jour_ferm;
  }
  if (req.body.frais_etranger != null) {
    res.site.frais_etranger = req.body.frais_etranger;
  }
  if (req.body.frais_resident != null) {
    res.site.frais_resident = req.body.frais_resident;
  }
  if (req.body.commodite != null) {
    res.site.commodite = req.body.commodite;
  }
  if (req.body.ticket_group != null) {
    res.site.ticket_group = req.body.ticket_group;
  }

  if (req.body.heur_ferm != null) {
    res.site.heur_ferm = req.body.heur_ferm;
  }
  if (req.body.images != null) {
    res.site.images = req.body.images;
  }
  if (req.body.image360 != null) {
    res.site.image360 = req.body.image360;
  }
  if (req.body.type != null) {
    res.site.type = req.body.type;
  }
  if (req.body.patrimoine != null) {
    res.site.patrimoine = req.body.patrimoine;
  }
  if (req.body.epoque != null) {
    res.site.epoque = req.body.epoque;
  }
  if (req.body.region != null) {
    res.site.region = req.body.region;
  }
  if (req.body.reclamations != null) {
    res.site.reclamations = req.body.reclamations;
  }
  try {
    const updatedsite = await res.site.save();
    res.json(updatedsite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Delete One
router.delete("/Delete/:id", getProduit, async (req, res) => {
  try {
    await res.site.remove();
    res.json({ message: "Deleted site" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
async function getProduit(req, res, next) {
  let site;

  try {
    site = await Site.findById(req.params.id);
    if (site == null) {
      return res.status(404).json({ message: "Cannot find site" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.site = site;
  next();
}

module.exports = router;

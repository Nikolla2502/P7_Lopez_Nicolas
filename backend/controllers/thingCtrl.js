const Sauce = require('../models/thing');



exports.createThing = (req, res ,next) => {
    const thingObject = JSON.parse(req.body.sauce);
    const thing = new Thing({
        ...thingObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    thing.save()
    .then(() => res.status(201).json({ message: 'thing enregisté !!'}))
    .catch(error => {
        res.status(400).json({error});

    });
};

exports.getAllThings = (req, res, next)=> {
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id})  // on recupere l'id correspondant à la demande et on verifie que celui-ci correspond à l'objet demandé
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
};

exports.modifyThing = (req, res, next) => {
    const thingObject = req.file ?
    { 
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body};
    thing.updateOne({_id: req.params.id}, {...sauceObject, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Thing modifié '}))
    .catch(error => res.status(400).json({error}));
};


exports.deleteThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id})
    .then(thing => {
        const filename = thing.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`,() => {
            Sauce.deleteOne({ _id: req.params.id})            // on supprime l'objet
            .then(() => res.status(200).json({ message: 'Thing supprimée !!'}))
            .catch(error => res.status(400).json({ error }));    
        })
    })
    .catch(error => res.status(500).json({error}));
};



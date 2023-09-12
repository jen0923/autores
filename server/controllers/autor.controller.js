const Autor = require ("../models/autor.model"); // tengo que conectarlo con mi esquema ya que este controller es el encargado de modificar mi informacion

module.exports.get_all =( req, res ) => {// peticiones va acompanadas de res y req mando info y recibo informacion
    Autor.find().sort({nombre:1}) // sort me acomoda los docimentos en orden especifico,  nombre (asi especifico que es lo que quiero que me acomode 1 ascendente -1 desendiente)
    .then(autores => res.json(autores))
    .catch(err =>{
        res.status(400). json(err); // no se puede procesar
    });
} 
module. exports.create_autor =(req,res) =>{ // voy a estar recibiendo atravez de un body
    Autor.create(req.body) // aca le digo que se guarda lo que recibo del body
    .then(autor => res.json(autor))
    .catch(err=>{
        res.status(400).json(err);
    });

}
module.exports.get_autor = (req, res) => {
    //req.params.id = 123456
    Autor.findOne({_id: req.params.id})
        .then(autor => res.json(autor))
        .catch(err =>{
            res.status(400).json(err);
        });
}

module.exports.update_autor = (req, res) => {
    //req.params.id = 123456
    Autor.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(autor => res.json(autor))
        .catch(err =>{
            res.status(400).json(err);
        });
}

module.exports.delete_autor = (req, res) => {
    Autor.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err =>{
            res.status(400).json(err);
        });
}
 
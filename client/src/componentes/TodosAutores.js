//useState: Me permite crear variables que si cambian, se ve reflejado el cambio en mi componente
//useEffect: Ejecuta una función ANTES de que se monte el componente
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const TodosAutores = () => {
    const [autores, setAutores] = useState([]);

    //Antes de que se monte el componente, llamamos a la ruta de la api que me regresa la lista de autores
    useEffect(()=> {
        axios.get("http://localhost:8000/api/autores")
            .then(res => setAutores(res.data))
            .catch(err => console.log(err));
    }, [])

    const borrarAutor = id => {
        axios.delete("http://localhost:8000/api/autores/"+id)
            .then(res => {
                let nuevaLista = autores.filter(autor => autor._id !== id);
                setAutores(nuevaLista);
            })
            .catch(err=>console.log(err));
    }

    return (
        <div>
            <Link to="/nuevo" className="btn btn-success">Nuevo Autor</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Libros</th>
                        <th>Cuentos</th>
                        <th>Artículos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        autores.map((autor, index) =>(
                            <tr key={index}>
                                <td>{autor.nombre}</td>
                                <td>
                                    <img src={autor.imagen} alt="autor" className="img-fluid" />
                                </td>
                                <td>
                                    {
                                        autor.libros ? <span className="text-success">SI</span> : <span className="text-danger">NO</span>
                                    }
                                </td>
                                <td>
                                    {
                                        autor.cuentos ? <span className="text-success">SI</span> : <span className="text-danger">NO</span>
                                    }
                                </td>
                                <td>
                                    {
                                        autor.articulos ? <span className="text-success">SI</span> : <span className="text-danger">NO</span>
                                    }
                                </td>
                                <td>
                                    <Link className='btn btn-warning' to={`/editar/${autor._id}`}>Editar</Link>
                                    <button className="btn btn-danger" onClick={()=> borrarAutor(autor._id) }>Borrar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default TodosAutores;
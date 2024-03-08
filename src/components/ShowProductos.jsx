import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { alerta } from '../functions';

const ShowProductos = () => {
    const url = 'https://api.escuelajs.co/api/v1/products';
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [operation, setOperation] = useState(1);
    const [titleModal, setTitleModal] = useState('');

    const getProductos = async () => {
        const response = await axios.get(url);
        setProducts(response.data);
    }

    useEffect( () => {
        getProductos();
    });

  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='rwo mt-3'>
                <div className='col-md-4 offset-md-4'>
                    <div className='d-grid mx-auto'>
                        <button className='btn btn-dark'>
                            <i className='fa-solid fa-circle-plus' /> Añadir
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className='row mt-3'>
            <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Descripcion</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {
                                products.map( (product, i) => (
                                    <tr key={product.id}>
                                        <td>{i + 1}</td>
                                        <td>{product.title}</td>
                                        <td>{product.description}</td>
                                        <td>${new Intl.NumberFormat('es-hn').format(product.price)}</td>
                                        <td>
                                            <button className='btn btn-warning'>
                                                <i className='fa-solid fa-edit' />
                                            </button>
                                            <button className='btn btn-danger'>
                                                <i className='fa-solid fa-trash' />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowProductos;

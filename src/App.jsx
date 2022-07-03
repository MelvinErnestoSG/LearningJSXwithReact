import {useState} from 'react';
import './App.css';
import React from 'react';

const inicialState = {name:'', price: 0};

const App = () => {
    const [product, setProduct] = useState(inicialState);

    const handleChange = (e) => {
        const fieldValue = e.target.value;
        const fieldName = e.target.name;
        console.log({fieldValue, fieldName})
        setProduct({...product, [fieldValue]: fieldName});
    }

    const handleSubmit = (e) => {
        e.preventDefaut();
        fetch('http://localhost:3000/api/v1/products',{
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(product),
        })
        .then((res) =>res.json())
        .then((data) => {
            if(data.ok){
                console.log("Exito");
                setProduct(inicialState);
            }
            else{
                console.log(data.message);
            }
        })
        .catch((err) => console.log({err}))
    }

    return (
        <div className="App">
            <h1>Nuevo Producto</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} 
                    value={product.name}
                    type="text" 
                    name='name' 
                    placeholder='Nombre del producto'>
                </input>

                <input onChange={handleChange} 
                    value={product.price}
                    type="number" 
                    name='price' 
                    placeholder='Precio del producto'>
                </input>
                <button>Crear Producto</button>
            </form>
        </div>
    );
}

export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Sucesso() {
    if (window.innerWidth < 768) {

        const [dados, setDados] = useState([]);

        useEffect(() => {
            axios.post('http://localhost:3001/api/processarform')
                .then(response => {
                    setDados(response.data);
                })
                .catch(error => {
                    console.error('Erro ao buscar dados:', error);
                });
        }, []);
        return (
            <nav>
                {dados.map(item => (
                    item.name
                ))}
                <div className="HeaderLogo">
                    <p>Sucesso</p>
                </div>
            </nav>
        )
    } else {
        return (
            <nav>
                <div className="HeaderLogo">
                    <p>Sucesso</p>
                </div>
            </nav>
        )
    }
}

export default Sucesso
import Table from 'react-bootstrap/Table';
import axios from "axios";
import React, { useEffect, useState } from "react";
function Tables() {
    const [descricao,setDescricao] = useState();
    useEffect(()=>{
        axios.get("http://localhost:8000/receitas/")
        .then((response)=> setDescricao(response.data))
        .catch((err)=>{
            console.log("Ocorreu um erro");

        })
    },[])
    return (
        <Table striped bordered hover>
            <thead>
                <tr>

                    <th>Descricao</th>
                    <th>Valor</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{descricao?.descricao}</td>
                    <td>{descricao?.valor}</td>
                    <td>@mdo</td>
                </tr>
                <tr>

                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>

                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Tables;
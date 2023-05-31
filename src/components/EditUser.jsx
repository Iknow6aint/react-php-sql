import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/api/user/${id}`).then(function (response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(function (response) {
            console.log(response.data);
            navigate('/');
        });

    }
    return (
        <div>
            <h1>Edit user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input value={inputs.name} type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Rattings: </label>
                            </th>
                            <td>
                                <input value={inputs.email} type="text" name="ratings" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Date: </label>
                            </th>
                            <td>
                                <input value={inputs.mobile} type="text" name="date" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Director </label>
                            </th>
                            <td>
                                <input value={inputs.mobile} type="text" name="director" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

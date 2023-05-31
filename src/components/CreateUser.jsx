import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate input
        if (!inputs || !inputs.name || !inputs.date || !inputs.director || !inputs.ratings) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        console.log(inputs);
        axios.post('http://localhost/api/user/save', inputs).then(function (response) {
            console.log(response.data);
            navigate('/');
        });

    }
    return (
        <div>
            <h1>Create movies</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Rattings: </label>
                            </th>
                            <td>
                                <input type="text" name="ratings" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Date: </label>
                            </th>
                            <td>
                                <input type="text" name="date" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Director: </label>
                            </th>
                            <td>
                                <input type="text" name="director" onChange={handleChange} />
                            </td>
                        </tr>
                        {errorMessage && <p>{errorMessage}</p>}
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

import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [movies, setMovie] = useState([]);
    useEffect(() => {
        getMovie();
    }, []);

    function getMovie() {
        axios.get('http://localhost/api/user/').then(function (response) {
            console.log(response.data);
            setMovie(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/api/user/${id}/delete`).then(function (response) {
            console.log(response.data);
            getMovie();
        });
    }
    return (
        <div>
            <h1>List Movies</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Rattings</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((user, key) =>
                        <tr key={key}>
                            <td>{movies.id}</td>
                            <td>{movies.name}</td>
                            <td>{movies.rattings}</td>
                            <td>{movies.date}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{ marginRight: "10px" }}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}

import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovie();
    }, []);

    function getMovie() {
        axios.get('http://localhost/api/user/').then(function (response) {
            console.log(response.data);
            setMovies(response.data);
        });
    }

    const deleteUser = (id) => {
        //https://secret-investigator.000webhostapp.com/
        axios.delete(`http://localhost/api/user/${id}/delete`)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Failed to submit form');
                }
                console.log(response.data);
                getMovie();
            });
    }

    return (
        <div >
            <h1>List Movies</h1>
            <div className="list-table">
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Rattings</th>
                            <th>Date</th>
                            <th>Director</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="active-row">
                        {movies.map((movies, key) =>
                            <tr key={key}>
                                <td>{movies.id}</td>
                                <td>{movies.Name}</td>
                                <td>{movies.ratings}</td>
                                <td>{movies.date}</td>
                                <td>{movies.director}</td>
                                <td>
                                    <Link to={`user/${movies.id}/edit`} style={{ marginRight: "10px" }}>Edit</Link>
                                    <button onClick={() => deleteUser(movies.id)}>Delete</button>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

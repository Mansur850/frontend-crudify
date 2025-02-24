import { Link, useNavigate, useParams } from "react-router-dom";
import backIcon from "../assets/images/back.svg";
import { a } from "../services/axiosInstance";

function Delete() {
    const { id } = useParams();
    const navigate = useNavigate();

    async function handleDelete() {
        try {
            await a.delete(`items/delete/${id}/`);
            navigate("/"); 
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="block">
            <div className="container">
                <Link to={`/read/${id}`} className="fixed-top-left">
                    <img src={backIcon} alt="Back"></img>
                </Link>
                <h1 className="title">Удалить заметку?</h1>
                <p className="description">Вы уверены, что хотите удалить заметку?</p>
                <button onClick={handleDelete} className="fixed-buttom-delete">Удалить</button>
            </div>
        </div>
    );
}

export default Delete;

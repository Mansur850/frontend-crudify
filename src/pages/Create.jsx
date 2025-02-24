import { Link, useLocation, useNavigate } from "react-router-dom";
import backIcon from "../assets/images/back.svg";
import CardForm from "../components/CardForm";
import { HOME } from "../services/consts";

function Create() {
    const location = useLocation();
    const navigate = useNavigate();
    const id = new URLSearchParams(location.search).get("id"); 

    return (
        <div className="block">
            <div className="container">
                <button onClick={() => navigate(`/read/${id || ""}`)} className="fixed-top-left">
                    <img src={backIcon} alt="Back"></img>
                </button>
                <h1 className="title">Создать заметку</h1>
                <CardForm />
            </div>
        </div>
    );
}

export default Create;

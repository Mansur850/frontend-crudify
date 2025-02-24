import { Link, useParams } from "react-router-dom";
import backIcon from "../assets/images/back.svg";
import UpdateCardForm from "../components/UpdateCardForm";

function Update() {
    const { id } = useParams();

    return (
        <div className="block">
            <div className="container">
                <Link to={`/read/${id}`} className="fixed-top-left"> 
                    <img src={backIcon} alt="Back"></img>
                </Link>
                <h1 className="title">Изменить заметку</h1>
                <UpdateCardForm />
            </div>
        </div>
    );
}

export default Update;
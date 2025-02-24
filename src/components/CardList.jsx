import { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import { a } from "../services/axiosInstance";

function CardList() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await a.get("items/");
                setPosts(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post =>
        post.content.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="card-list-container">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Поиск заметок..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="card-list">
                {filteredPosts.map((post) => (
                    <CardItem key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default CardList;

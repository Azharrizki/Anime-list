import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

const App = () => {
	const [anime, setAnime] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://api.jikan.moe/v4/top/characters")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setAnime(data.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container my-5">
			<h1 className="text-center">Character Anime List</h1>
			<div className="container my-5">
				<div id="daftar-anime" className="row d-flex flex-wrap">
					<CharacterList anime={anime} loading={loading} />
				</div>
			</div>
		</div>
	);
};

export default App;

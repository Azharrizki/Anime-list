const MovieCard = ({ anime, loading }) => {
	return (
		<>
			{loading && <div className="text-center">Loading...</div>}
			{anime &&
				anime.map((anime) => (
					<div
						className="col-lg-3 col-md-4 col-sm-6 col-12 my-3 "
						key={anime.mal_id}
					>
						<div className="card h-100">
							<img
								src={anime.images.jpg.image_url}
								className="card-img-top"
								alt="skilvul"
							/>
							<div className="card-body">
								<h5 className="card-title">{anime.name}</h5>
								<p className="card-text">
									{anime.about.slice(0, 100)}...
								</p>
							</div>
							<div className="card-body">
								<a
									href={anime.url}
									className="btn btn-primary w-100 text-uppercase"
								>
									read more
								</a>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default MovieCard;

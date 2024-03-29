import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home () {
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a960ad448a61fb42f64ef81e2c1055ad"
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
            <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              poster_path={ movie.poster_path }
              title={movie.title}
              release_date={movie.release_date}
              overview={movie.overview}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
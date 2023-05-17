import { lazy, Suspense } from "react";
import { useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";

const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Movies = lazy(() => import("pages/Movies"));
const Home= lazy(() => import("pages/Home"));


export const App = () => {
  //const [movie, setMovie] = useState(null); 
  //const [searchParams, setSearchParams] = useSearchParams();
  //const movieName = searchParams.get("name");

  return (
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
          </Route> 
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
};

import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Movies = lazy(() => import("pages/Movies"));
const Home = lazy(() => import("pages/Home"));
const Cast = lazy(() => import("components/Cast"));
const Reviews = lazy(() => import("components/Reviews"));


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
          </Route> 
            <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  );
};

export default App;

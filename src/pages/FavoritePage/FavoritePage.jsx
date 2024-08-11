import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import css from "./FavoritePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import FavoritesItem from "../../components/FavoritesItem /FavoritesItem";
import { useEffect } from "react";
import {
  selectCampers,
  selectFavorites,
  selectIsError,
  selectIsLoading,
  selectLocation,
} from "../../redux/selectors";
import { fetchCampers } from "../../redux/camper/camperOps";
import { Skeleton } from "@mui/material";
import { changeLocation } from "../../redux/camper/camperSlice";
const FavoritePage = () => {
  const savedCampers = useSelector(selectFavorites);
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const location = useSelector(selectLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    if (location !== "") {
      dispatch(changeLocation(""));
    }
  }, [location, dispatch]);

  useEffect(() => {
    if (campers.length === 0) dispatch(fetchCampers());
  }, [dispatch, campers]);

  const skeletonCount = 4;
  const skeletons = Array.from({ length: skeletonCount });

  return (
    <div>
      <Helmet>
        <title>Favorites - Campervaneo</title>
      </Helmet>
      <Container>
        <Logo favorites={true} />
        <div className={css.container}>
          <h1 className={css.title}>Favorite campervans</h1>
          <div className={css.line}></div>
          {loading || error ? (
            skeletons.map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={888}
                height={360}
                animation="wave"
                sx={{
                  borderRadius: "20px",
                  margin: "0 auto",
                  marginBottom: "32px",
                }}
              />
            ))
          ) : (
            <ul className={css.list}>
              {savedCampers.map((camper) => (
                <FavoritesItem key={camper._id} camper={camper} />
              ))}
            </ul>
          )}
          {savedCampers.length === 0 ? (
            <p className={css.empty}>Your favorite campervans list is empty</p>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default FavoritePage;

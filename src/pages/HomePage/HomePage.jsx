import { Helmet } from "react-helmet-async";

import Logo from "../../components/Logo/Logo";

import Container from "../../components/Container/Container";

import css from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../redux/selectors";
import { changeLocation } from "../../redux/camper/camperSlice";

export default function HomePage() {
  const location = useSelector(selectLocation);
  const dispatch = useDispatch();

  if (location != "") dispatch(changeLocation(""));

  return (
    <div>
      <Helmet>
        <title>Home - Campervaneo</title>
      </Helmet>
      <Container>
        <Logo />
        <div className={css.container}>
          <img
            src="./home.jpg"
            alt="camper"
            className={css.img}
            width={700}
            height={500}
          />
          <div className={css.textContent}>
            <p className={css.span}></p>
            <p className={css.title}>
              Experience unforgettable adventures across the globe with our
              modern, fully equipped campervans.
            </p>
            <NavLink to="/catalog" className={css.submit}>
              Find your camper van!
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

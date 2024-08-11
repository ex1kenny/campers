import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import { SearchBoxKatalog } from "../../components/SearchBoxKatalog/SearchBoxKatalog";
import css from "./CatalogPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/camper/camperOps";
import { CamperList } from "../../components/CamperList/CamperList";
import Logo from "../../components/Logo/Logo";
import { selectCampers } from "../../redux/selectors";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    if (campers.length === 0) dispatch(fetchCampers());
  }, [dispatch, campers]);

  return (
    <div>
      <Helmet>
        <title>Catalog - Campervaneo</title>
      </Helmet>
      <Container>
        <Logo />
        <div className={css.container}>
          <SearchBoxKatalog />
          <CamperList />
        </div>
      </Container>
    </div>
  );
}

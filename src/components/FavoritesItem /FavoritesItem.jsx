import { useEffect, useState } from "react";
import { Advantages } from "../Advantages/Advantages";
import { Icon } from "../Icon/Icon";
import css from "./FavoritesItem.module.css";
import { MainModal } from "../MainModal/MainModal";
import { FavoritesModal } from "../FavoritesModal/FavoritesModal";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import { addFavorite, deleteFavorite } from "../../redux/camper/camperSlice";

const FavoritesItem = ({ camper }) => {
  const savedCampers = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const LSCampers = JSON.parse(localStorage.getItem("campers")) || [];
    setIsFavorite(LSCampers.includes(camper._id));
  }, [camper._id]);

  useEffect(() => {
    localStorage.setItem(
      "campers",
      JSON.stringify(savedCampers.map((camper) => camper._id))
    );
  }, [savedCampers]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(camper._id));
    } else {
      dispatch(addFavorite(camper));
    }
    setIsFavorite(!isFavorite);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <li className={css.container}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={camper.gallery[0]}
          alt={camper.name}
          width={290}
          height={310}
        />
      </div>
      <div className={css.contentWrapper}>
        <div className={css.mainContent}>
          <p className={css.priceContent}>{camper.name}</p>
          <div className={css.priceWrapper}>
            <p className={css.priceContent}>€{camper.price}.00</p>
            <button
              className={css.favorite}
              onClick={() => handleFavoriteClick()}
            >
              {isFavorite ? (
                <Icon
                  id={"icon-favorite"}
                  width={24}
                  height={24}
                  fill="var(--color-red)"
                  stroke="var(--color-red)"
                />
              ) : (
                <Icon
                  id={"icon-favorite"}
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                />
              )}
            </button>
          </div>
        </div>
        <div className={css.secondaryWrapper}>
          <div className={css.secondaryContent}>
            <Icon
              id={"icon-star"}
              width={16}
              height={16}
              fill="var(--color-yellow)"
              stroke="var(--color-yellow)"
            />
            <p className={css.rating}>
              {camper.rating}(
              {camper.reviews.length > 1
                ? `${camper.reviews.length} Reviews`
                : `${camper.reviews.length} Review`}
              )
            </p>
          </div>
          <div className={css.secondaryContent}>
            <Icon
              id={"icon-location"}
              width={16}
              height={16}
              fill="none"
              stroke="currentColor"
            />
            <p className={css.location}>{camper.location}</p>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <Advantages camper={camper} />
        <button
          className={css.button}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Show more
        </button>
      </div>
      <MainModal isOpen={isModalOpen} onClose={toggleModal}>
        <FavoritesModal camper={camper} />
      </MainModal>
    </li>
  );
};

export default FavoritesItem;

import { Icon } from "../Icon/Icon";
import { Tabs } from "../Tabs/Tabs";
import css from "./FavoritesModal.module.css";

export const FavoritesModal = ({ camper }) => {
  return (
    <div className={css.container}>
      <div className={css.mainContent}>
        <h2 className={css.priceContent}>{camper.name}</h2>
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
        <p className={css.priceContent}>€{camper.price}.00</p>
      </div>
      <div className={css.scrolledWrapper}>
        <div className={css.imgContent}>
          {camper.gallery.map((img, index) => (
            <img
              key={index}
              className={css.img}
              src={img}
              alt={camper.name}
              width={290}
              height={310}
            />
          ))}
        </div>
        <p className={css.description}>{camper.description}</p>
        <Tabs camper={camper} />
      </div>
    </div>
  );
};

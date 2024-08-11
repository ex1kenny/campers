import { FeaturesForm } from "../FeaturesForm/FeaturesForm";
import { Review } from "../Review/Review";
import css from "./Reviews.module.css";

export const Reviews = ({ camper }) => {
  return (
    <div className={css.container}>
      <div className={css.reviews}>
        <ul className={css.list}>
          {camper.reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </ul>
      </div>
      <FeaturesForm />
    </div>
  );
};

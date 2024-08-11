import { Icon } from "../Icon/Icon";
import css from "./Review.module.css";

export const Review = ({ review }) => {
  return (
    <li>
      <div className={css.nameWrapper}>
        <div className={css.logo}>
          <p className={css.name}>{review.reviewer_name[0]}</p>
        </div>
        <div className={css.rating}>
          <p className={css.fullName}>{review.reviewer_name}</p>
          <div>
            {[...Array(5)].map((_, index) =>
              index < review.reviewer_rating ? (
                <Icon
                  key={index}
                  id={"icon-star"}
                  width={16}
                  height={16}
                  fill="var(--color-yellow)"
                  stroke="var(--color-yellow)"
                />
              ) : (
                <Icon
                  key={index}
                  id={"icon-star"}
                  width={16}
                  height={16}
                  fill="#F2F4F7"
                  stroke="#F2F4F7"
                />
              )
            )}
          </div>
        </div>
      </div>
      <p className={css.comment}>{review.comment}</p>
    </li>
  );
};

import { FeaturesDetails } from "../FeaturesDetails/FeaturesDetails";
import { FeaturesForm } from "../FeaturesForm/FeaturesForm";
import css from "./Features.module.css";

export const Features = ({ camper }) => {
  return (
    <div className={css.container}>
      <FeaturesDetails camper={camper} />
      <FeaturesForm />
    </div>
  );
};

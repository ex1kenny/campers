import css from "./SearchBoxKatalog.module.css";

import { Filters } from "../Filters/Filters";
import { LocationInput } from "../LocationInput/LocationInput";

export const SearchBoxKatalog = () => {
  return (
    <div className={css.container}>
      <LocationInput />
      <Filters />
    </div>
  );
};

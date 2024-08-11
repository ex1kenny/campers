import { useId } from "react";
import css from "./LocationInput.module.css";
import { Icon } from "../Icon/Icon";
import { changeLocation } from "../../redux/camper/camperSlice";
import { useDispatch } from "react-redux";

export const LocationInput = () => {
  const inputId = useId();
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={inputId}>
        Location
      </label>
      <div className={css.inputWrapper}>
        <input
          className={css.input}
          type="text"
          id={inputId}
          placeholder="Country, City"
          onChange={(evt) => dispatch(changeLocation(evt.target.value))}
        />
        <Icon
          id={"icon-location"}
          width={18}
          height={20}
          fill="none"
          stroke="currentColor"
          isInputStyled={true}
        />
      </div>
    </div>
  );
};

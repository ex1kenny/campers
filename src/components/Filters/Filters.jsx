import { useState } from "react";
import { Icon } from "../Icon/Icon";
import css from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { changeFilters } from "../../redux/camper/camperSlice";

export const Filters = () => {
  const dispatch = useDispatch();

  const [selectedFilters, setSelectedFilters] = useState({
    equipment: [],
    type: [],
  });

  const toggleFilter = (category, filter) => {
    setSelectedFilters((prevState) => {
      const updatedCategory = prevState[category].includes(filter)
        ? prevState[category].filter((item) => item !== filter)
        : [...prevState[category], filter];

      return { ...prevState, [category]: updatedCategory };
    });
  };

  return (
    <div>
      <p className={css.title}>Filters</p>
      <h2 className={css.subtitle}>Vehicle equipment</h2>
      <div className={css.block}></div>
      <ul className={css.wrapper}>
        {[
          {
            id: "icon-wind",
            label: "AC",
            isFill: true,
            isStroke: true,
          },
          { id: "icon-automatic", label: "Automatic" },
          { id: "icon-eat", label: "Kitchen" },
          { id: "icon-tv", label: "TV" },
          { id: "icon-shower", label: "Shower/WC" },
        ].map(({ id, label, isFill, isStroke }) => (
          <li
            key={id}
            className={
              selectedFilters["equipment"].includes(label)
                ? (css.wrapperItem, css.checked)
                : css.wrapperItem
            }
            onClick={() => {
              toggleFilter("equipment", label);
            }}
          >
            <button>
              <Icon
                id={id}
                width={32}
                height={32}
                fill={isFill ? "var(--color-dark)" : "none"}
                stroke={isStroke ? "none" : "currentColor"}
              />
              <p className={css.content}>{label}</p>
            </button>
          </li>
        ))}
      </ul>
      <h2 className={css.subtitle}>Vehicle type</h2>
      <div className={css.block}></div>
      <ul className={css.wrapper}>
        {[
          { id: "icon-camper1", label: "Van" },
          { id: "icon-camper2", label: "Fully Integrated" },
          { id: "icon-camper3", label: "Alcove" },
        ].map(({ id, label }) => (
          <li
            key={id}
            className={
              selectedFilters["type"].includes(label)
                ? (css.wrapperItem, css.checked)
                : css.wrapperItem
            }
            onClick={() => {
              toggleFilter("type", label);
            }}
          >
            <button>
              <Icon
                id={id}
                width={40}
                height={28}
                fill="var(--color-dark)"
                stroke="transparent"
              />
              <p className={css.content}>{label}</p>
            </button>
          </li>
        ))}
      </ul>
      <button
        className={css.submit}
        type="submit"
        onClick={() => {
          console.log(selectedFilters);
          dispatch(changeFilters(selectedFilters));
          setSelectedFilters({
            equipment: [],
            type: [],
          });
        }}
      >
        Search
      </button>
    </div>
  );
};

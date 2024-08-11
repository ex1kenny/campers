import css from "./Icon.module.css";

export const Icon = ({
  id,
  width = 24,
  height = 24,
  fill,
  stroke,
  isInputStyled = false,
  isCloseStyled = false,
}) => {
  // Обчислення шляху до спрайта в залежності від середовища
  const basePath =
    import.meta.env.MODE === "production" ? `${import.meta.env.BASE_URL}` : "";

  const spritePath = `${basePath}sprite.svg#${id}`;

  console.log("SVG Sprite Path:", spritePath);
  return (
    <svg
      className={`${isInputStyled ? css.icon : ""} ${
        isCloseStyled ? css.close : ""
      }`}
      width={width}
      height={height}
      role="img"
      fill={fill}
      stroke={stroke}
    >
      <use href={`${basePath}/sprite.svg#${id}`} />
    </svg>
  );
};

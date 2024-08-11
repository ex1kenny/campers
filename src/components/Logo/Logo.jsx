import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import { Icon } from "../Icon/Icon";
const Logo = ({ favorites }) => {
  return (
    <div className={css.container}>
      <NavLink to="home" className={css.logo}>
        camper<span className={css.span}>vaneo</span>
      </NavLink>
      <div className={css.links}>
        <NavLink to="/catalog" className={css.offer}>
          Our offer
        </NavLink>
        <NavLink to="/favorites" className={css.favorites}>
          {favorites ? (
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
              fill="transparent"
              stroke="var(--color-dark)"
            />
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Logo;

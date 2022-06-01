import { Fragment } from "react";
import mealImage from "../../assets/meals.jpg";
import HeadCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <Fragment>
      <nav class="flex items-center justify-between bg-orange-800  text-white font-bold text-xs h-20">
        <div class="px-10 text-xl">JaleelFood</div>
        <HeadCartButton/>
      </nav>
      <div>
        <img src={mealImage} class="w-full h-60" alt='yummy food' />
      </div>
    </Fragment>
  );
};
export default Header;

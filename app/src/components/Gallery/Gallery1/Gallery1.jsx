import { useDarkContext } from "../../../context/DardMode";
import "./Gallery1.css";

const Gallery1 = () => {
  const { dark } = useDarkContext();
  return (
    <div className=" w-full mt-[120px]">
      <h1
        className={` text-center mb-[40px] text-[33px] font-semibold ${
          !dark ? "text-white" : "text-black"
        }`}
      >
        User shots gallery
      </h1>
      <div className="body">
        <div className="slider">
          <div className="  slide-track">
            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/01.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/02.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/03.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/04.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/05.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/06.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/01.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/02.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/03.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/04.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/05.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/06.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/01.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/02.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/03.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/04.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/05.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/06.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/01.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/02.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/03.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/04.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/05.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/06.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/01.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/02.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/03.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/04.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/05.jpg"
                alt=""
              />
            </div>

            <div className=" slide">
              <img
                src="https://silicon.createx.studio/assets/img/landing/product/gallery/06.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery1;

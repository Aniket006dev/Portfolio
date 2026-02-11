import { ArrowUpRight, Link } from "lucide-react";
import { useEffect, useState } from "react";

const Carousel = ({ highlights }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % highlights.length);
    }, 2500); // change speed here

    return () => clearInterval(interval);
  }, [highlights.length]);

  return (
    <div className="space-y-8 hidden lg:flex w-full h-full mb-10 justify-center items-center relative overflow-hidden">
      {highlights.map((item, index) => {
        const offset = index - active;

        // normalize looping
        const normalized =
          offset < -1
            ? offset + highlights.length
            : offset > 1
            ? offset - highlights.length
            : offset;

        let style = "";

        if (normalized === 0) {
          // center image
          style =
            "scale-110 opacity-100 z-20 translate-x-0";
        } else if (normalized === -1) {
          // left image
          style =
            "scale-90 opacity-60 mx-20 blur z-10 -translate-x-36";
        } else if (normalized === 1) {
          // right image
          style =
            "scale-90 opacity-60 blur mx-20 z-10 translate-x-36";
        } else {
          // hidden far images
          style =
            "scale-75 opacity-0  z-0 translate-x-0";
        }

        return (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out px-15 ${style}`}
          >
            <div className="border border-primary py-4 rounded-2xl bg-background shadow-lg object-cover" style={{boxShadow: ""}}>
              <img
                src={item.img}
                alt={item.desc}
                className="mx-auto mb-2 h-85 object-cover"
              />
              <a href={item.link} className="mx-4 flex items-center text-center text-sm text-muted-foreground">{item.desc}<ArrowUpRight className="mx-3 w-4 h-4"></ArrowUpRight></a>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;

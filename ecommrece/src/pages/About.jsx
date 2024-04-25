import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8 mt-[72px]">
        <h1 className="text-3xl font-semibold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
          sem ut tellus malesuada, a convallis enim molestie. Sed at erat vitae
          orci rhoncus sollicitudin. Phasellus posuere consequat ligula, a
          fringilla odio tincidunt nec. Fusce lobortis sem eu orci fringilla, eu
          tempus purus tincidunt. Integer facilisis orci vitae tincidunt
          posuere.
        </p>
        <p className="text-lg mb-4">
          Nullam scelerisque, libero ut blandit ullamcorper, nisi est consequat
          ligula, a rhoncus felis nulla nec nisi. Nam sit amet neque urna. Sed
          sagittis nulla nec tortor vulputate, et scelerisque urna mattis.
          Vestibulum nec purus risus. Integer maximus, arcu ut lacinia tempus,
          libero eros fringilla ligula, vel convallis nisi tortor nec risus.
          Vivamus eleifend felis a risus lobortis dignissim.
        </p>
        <p className="text-lg mb-4">
          Fusce dignissim eros vitae neque tempor, vel lacinia mauris commodo.
          Sed in tellus vel odio rutrum dapibus ac sit amet neque. Phasellus at
          tincidunt risus. Vivamus tincidunt sapien non velit varius viverra. In
          hac habitasse platea dictumst. Nam malesuada ex et risus dictum, vitae
          posuere mi tincidunt. Morbi eget lorem nec purus rutrum ultrices.
          Vestibulum aliquet luctus aliquet.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;

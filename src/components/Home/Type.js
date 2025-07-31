import React from "react";
import Typewriter from "typewriter-effect";

/**
 * Type function renders a Typewriter component from the typewriter-effect package.
 * It displays a looping sequence of strings with a typewriter effect.
 *
 * @returns {JSX.Element} A JSX element containing the Typewriter component.
 */
function Type() {
  return (
    <Typewriter
      options={{
        /**
         * The strings to be typed out.
         * We use an array of strings to loop through and display a different string each time.
         */
        strings: [
          "Software Developer",
          "AI Engineer",
          "AI Researcher",
          "Python Developer",
        ],
        /**
         * Start the animation immediately.
         */
        autoStart: true,
        /**
         * Loop the animation.
         */
        loop: true,
        /**
         * The speed at which the text is deleted.
         */
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

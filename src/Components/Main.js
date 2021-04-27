import programs from "../programs.json";

import Section from "./Section";

const Main = () => {
  return (
    <main>
      {programs.map((elem, index) => {
        return (
          <Section key={index} category={elem.category} images={elem.images} />
        );
      })}
    </main>
  );
};

export default Main;

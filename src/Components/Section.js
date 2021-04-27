import Images from "./Images";

const Section = (props) => {
  console.log(props.images);
  return (
    <section>
      <h3>{props.category}</h3>
      <div>
        {props.images.map((elem, index) => {
          return <Images key={index} images={elem} />;
        })}
      </div>
    </section>
  );
};

export default Section;

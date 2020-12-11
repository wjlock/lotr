function Movie(props) {
  return (
    <div>
      <h1>The Lord of the Rings: {props.title}</h1>
      <p>
        {props.hours}hrs , {props.minutes}minutes
      </p>
    </div>
  );
}

export default Movie;

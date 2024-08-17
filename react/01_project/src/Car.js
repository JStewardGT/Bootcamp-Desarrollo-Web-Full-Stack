import PropTypes from "prop-types";

function Car(props) {
  return <h2>I am a {props.info.name} {props.info.model} Car!</h2>;
}

Car.propTypes = {
  color: PropTypes.string.isRequired,
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired
  }).isRequired,
};

export default Car;

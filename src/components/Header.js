import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color="green"
        text="Add"
        onClick={() =>
          onAdd({
            id: 13,
            text: `hello world`,
            day: "Mar 25 at 1:15 PM",
            reminder: true,
          })
        }
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header;

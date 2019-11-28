import { title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    color: "#FFFFFF",
    margin: '0',
    padding: '0',
    backgroundColor: 'grey',
    background: `url('pictures/bg.webp') right`,
    backgroundSize: 'cover',
  },
  landing: {
    color: "#FFFFFF",
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'space-around',
    padding: '20px 30px',
    margin: '0',
    minHeight: '100vh',
    "@media (min-width: 800px)": {
      padding: '30px 40px',
    },
    "@media (min-width: 1000px)": {
      padding: '40px 50px',
    },
  },
  gridContainer: {
    display:'flex',
    flexFlow: 'column',
    width: '100%',
  },
  title: {
    ...title,
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textShadow: '0 0 3px #f44336',
    textDecoration: "none",
    "@media (min-width: 300px)": {
      marginTop: '0',
    },
  },
  subtitle: {
    fontSize: "1.6rem",
    boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    margin: '0',
    padding: '10px',
    textStroke: '1px #f44336',
    color: 'black',
    "@media (min-width: 300px)": {
      width: "90%"
    },
    "@media (min-width: 500px)": {
      width: "80%"
    },
    "@media (min-width: 1000px)": {
      width: "60%"
    },
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  button: {
    textTransform: 'capitalize',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    fontSize: '20px',
    fontWeight: '1000',
    textShadow: '0 0 2px #f44336',
    "@media (min-width: 350px)": {
      width: "80%",
    },
    "@media (min-width: 500px)": {
      width: "60%",
      fontSize: '25px'
    },
    "@media (min-width: 900px)": {
      width: "40%",
      fontSize: '30px'
    },
  }
};

export default landingPageStyle;

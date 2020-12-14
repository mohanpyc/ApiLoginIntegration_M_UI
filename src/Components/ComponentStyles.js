import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  card: {
    width: "350px",
    padding: "15px 10px 10px 50px",
  },
  formControl: {},
  media: {
    margin: "25px 65px 0px 35px",
    height: "80px",
  },
  typoGraphy: {
    width: "265px",
  },
  link: {
    color: "#c91455",
    lineHeight: "45px",
    paddingLeft: "55px",
  },
  button: {
    backgroundColor: "#c91455",
    color: "white",
  },
  icons: {
    paddingTop: "20px",
    marginRight: "5px",
  },
  linkto: {
    textDecoration: "none",
  },
});

const drawerWidth = 250;

export const drawerStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: (props) => props.color,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  typoGraphy: {
    color: "white",
    mixBlendMode: "difference",
    textTransform: "capitalize"
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    color: (props) => props.color,
  },
  logoStyles: {
    width: "90%",
    marginRight: "16px",
  },

  listStyles: {
    marginTop: "0px",
    paddingTop: "0px",
  },
}));

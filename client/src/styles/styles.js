import { makeStyles } from "@material-ui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },

    drawer: {
        justifyContent:"flex-start",
        width:"240px",
    },
    drawerButton: {
        justifyContent:"flex-end",
    }



}));

export default useStyles;
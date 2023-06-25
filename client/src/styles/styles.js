import { makeStyles } from "@mui/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#7b9999",
        display: "flex",
    },
    navbar: {
        color:"#88716D",
    },
    drawer: {
        justifyContent:"flex-start",
        width:"240px",
    },
    drawerButton: {
        justifyContent:"flex-end",
    },
    drawerButtonExpanded: {
        paddingTop:18,
        paddingLeft:10,
    },
    linkBox: {
        display:"flex",
        flexDirection:"column",
    },
    link: {
        display:"flex",
        marginLeft:"auto",
        marginRight:"auto", 
        textDecorationLine:"none",
        marginBottom:10,
    },
    activeLink: {
        borderBottom:"3px solid yellow",
    },



}));

export default useStyles;
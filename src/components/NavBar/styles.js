import { makeStyles } from '@mui/styles';


export default makeStyles((theme) => ({
    Toolbar: {
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "240px",
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            flexWarp: "wrap"
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}))
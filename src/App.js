import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CreateAccount from "./pages/account/CreateAccount";
import UpdateAccount from "./pages/account/UpdateAccount";
import Header from "./components/layout/header/Header";
import About from "./pages/about/About"
import Login from "./pages/account/Login"
import Signup from "./pages/account/Signup";
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home";
import Navbar from "./components/layout/navigation/Navbar"
import Dashboard from "./pages/home/Dashboard"
import Dash from "./pages/home/Dash"
import Complaint from "./pages/complaints/Complaint"
import logo from "./assets/logo.png"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { SidebarData } from '../src/components/layout/navigation/SidebarData';
import Tenants from './pages/Tenants';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar,
          {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           My Space App
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {SidebarData.map((item, index) => {
            return (
              <ListItem button key={index} className={item.cName}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <Link className="navigation-link" to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </ListItem>
            )
          })}
        
        </List>
        <Divider />
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/Login">
              <Login></Login>
            </Route>
            <Route path="/Signup">
              <Signup></Signup>
            </Route>
            <Route path="/CreateAccount">
              <CreateAccount></CreateAccount>
            </Route>
            <Route path="/UpdateAccount">
              <UpdateAccount></UpdateAccount>
            </Route>
            <Route path="/Complaints">
              <Complaint></Complaint>
            </Route>
            <Route path="/Dash">
              <Dash></Dash>
            </Route>
            <Route path="/tenants">
              <Tenants></Tenants>
            </Route>
            <Route>
              <Contact></Contact>
            </Route>
          </Switch>
      </main>
      </Router>
    </div>
  );
}
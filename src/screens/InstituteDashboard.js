import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Course from './Course';
import { CourseForm } from './CourseForm';
import RegistrationControl from './RegistrationControl';
import Registration from './Registration';
import { StudentList } from './StudentList';
import { Quiz } from './Quiz';
import StudentForm from './StudentForm';

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

function InstituteDashboard(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [dashboard, setDashboard] = useState([
        {
            name: "Course",
            route: "course"
        },
        {
            name: "Registration Control",
            route: "regControl"
        },
        {
            name: "Result",
            route: "result"
        },
        {
            name: "Students List",
            route: "student"
        },
        {
            name: "Quiz",
            route: "quiz"
        },
    ])
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const navigation = useNavigate();
    const moveToOther = (Route) => {
        navigation(Route)
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {dashboard.map((x, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => { moveToOther(x.route) }}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={x.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Institute
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Routes>
                    <Route path='/course' element={<Course />} />
                    <Route path='courseForm' element={<CourseForm />} />
                    <Route path='regControl' element={<RegistrationControl />} />
                    <Route path='reg' element={<Registration />} />
                    <Route path='student' element={<StudentList/>}/>
                    <Route path='quiz' element={<Quiz/>}/>
                    <Route path='studentform' element={<StudentForm/>}/>
                </Routes>
            </Box>
        </Box>
    );
}
export default InstituteDashboard;
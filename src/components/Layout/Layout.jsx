import {
    Box,
    Toolbar,
    List,
    CssBaseline,
    IconButton,
    Typography,
    Divider,
    MenuIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    BookIcon,
    BookmarkIcon,
    MenuBookIcon,
    PeopleAltIcon,
    ArticleIcon,
    LogoutIcon
} from '../materialUI';
import { useState } from "react";
import { Outlet, Link, useNavigate  } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import './layout.css'
import { DrawerHeader, AppBar, Drawer, menu} from './Layout.data'

export const Layout = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const redirecTo = (path) => {
        if (path == '/') localStorage.removeItem('payload');
        navigate(path)
    }
    
    const icon = (menu) => {
        if(menu == 'Inicio') return <MenuBookIcon/>;
        if(menu == 'Libros') return <BookIcon/>;
        if(menu == 'Reservar') return <BookmarkIcon/>;
        if(menu == 'Usuarios') return <PeopleAltIcon/>;
        if(menu == 'Tesis') return <ArticleIcon/>;
        if(menu == 'Tesis') return <ArticleIcon/>;
        if(menu == 'Cerrar sesión') return <LogoutIcon/>;
    }


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} >
                <Toolbar className="bg-[#c8874e] text-black">
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{marginRight: 5,...(open && { display: "none" }),}}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Biblioteca Online
                    </Typography>
                </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                <DrawerHeader className="bg-[#c8874e]">
                    <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                    <List className="bg-[#c8874e] text-white">
                        {menu.map((text, index) => (
                        <ListItem key={index} disablePadding sx={{ display: "block" }} onClick={() => redirecTo(text.redirect)}>
                            <ListItemButton
                            sx={{minHeight: 48,justifyContent: open ? "initial" : "center",px: 2.5,}}>
                            <ListItemIcon sx={{ minWidth: 0, mx: open ? 3 : 4, justifyContent: "center", }}>
                                {icon(text.title)} 
                            </ListItemIcon>
                            <ListItemText>
                                <Link to={text.redirect} className='font-bold'>
                                    {text.title}
                                </Link>
                            </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>

                </Drawer>
                <Box component="main" className="centerBox">
                    <DrawerHeader />
                    <Outlet />
                </Box>
            </Box>
        </div>
    );
};

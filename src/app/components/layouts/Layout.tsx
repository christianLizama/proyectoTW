import Box from '@mui/material/Box';
import Head from 'next/head';
import { FC } from 'react';
import NavBar from "../ui/Navbar";

interface Props {
    title?: string; 
    children: React.ReactNode;
}

export const Layout:FC<Props> = ({title = 'Prueba',children}) => {
  return (
    <Box sx={{ flexFlow : 1}}>
        <Head>
            <title>{title}</title>
        </Head>
            <NavBar/>

            <Box sx={{padding:'10px 20px'}}>
                {children}
            </Box>

    </Box>
  )
}

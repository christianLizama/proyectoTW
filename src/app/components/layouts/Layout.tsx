import Box from '@mui/material/Box';
import Head from 'next/head';
import { FC } from 'react';
import SignIn from '../cliente/SignIn.client';
import SignUp from '../cliente/SignUp.client';

interface Props {
    title?: string; 
    children: React.ReactNode;
}

export const Layout:FC<Props> = ({title = 'Prueba', children}) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100vh', // Hacer que el contenedor principal ocupe toda la altura de la ventana
        bgcolor: 'white',
        color: 'black' // Cambiar el color del texto a negro
      }}
    >
        <Head>
            <title>{title}</title>
        </Head>
        {/* Puedes descomentar la siguiente línea para mostrar el NavBar si es necesario
        <NavBar/> 
        */}
        <SignUp/>
        <Box 
          sx={{
            padding: '10px 20px',
            maxWidth: '500px', // Ajustar según sea necesario para cambiar el ancho máximo del contenedor del contenido
            width: '100%', // Asegurarse de que el contenedor del contenido sea receptivo
            bgcolor: 'white',
            color: 'black' // Asegurarse de que el texto dentro de este contenedor también sea negro
          }}
        >
            {children}
        </Box>
    </Box>
  )
}

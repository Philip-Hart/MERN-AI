import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Home() {

    return (
        <Container maxWidth="sm">
        <Box
            sx={{
            width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
            }}
    />
    </Container>
    )

}
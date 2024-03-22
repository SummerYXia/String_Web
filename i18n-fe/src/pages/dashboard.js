// src/pages/dashboard.js
'use client'

import React, { useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';

const mockData = [
  {
    projectName: 'Self Served Content - Self_Served_Campaign_CTMGMT-3534_623a1299e252ca0a8ae81814',
    content: "We're writing to let you know that we were recently informed that one or more item(s) you have purchased does not meet applicable content or safety standards/regulations, due to safety testing and are subject to recall."
  },
  // ... additional mock data
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFuzzy, setIsFuzzy] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Replace with actual search logic
    setSearchResults(mockData);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <AppBar position="static" color="default" elevation={1} sx={{ mb: 3 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button variant="outlined">Menu</Button>

          <Select defaultValue="en-US" sx={{ mr: 2 }}>
            <MenuItem value="en-US">English (US)</MenuItem>
            <MenuItem value="es-ES">Español (ES)</MenuItem>
            {/* More locale options */}
          </Select>
          
          <Select defaultValue="project-1" sx={{ mr: 2 }}>
            <MenuItem value="project-1">Project 1</MenuItem>
            <MenuItem value="project-2">Project 2</MenuItem>
            {/* More project options */}
          </Select>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Search..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              sx={{ ml: 1, flex: 1 }}
            />
            <Button variant="contained" onClick={handleSearch}>
              SEARCH
            </Button>
          </Box>

          <FormControlLabel
            control={
              <Switch
                checked={isFuzzy}
                onChange={e => setIsFuzzy(e.target.checked)}
              />
            }
            label="Fuzzy"
          />
        </Toolbar>
      </AppBar>

      <Box>
        {searchResults.map((result, index) => (
          <Box key={index} sx={{ p: 3, mb: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Box sx={{ fontWeight: 'bold' }}>{result.projectName}</Box>
            <Box>{result.content}</Box>
            <Button variant="contained" size="small" sx={{ mt: 1 }}>
              COPY
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

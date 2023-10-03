import { Box } from '@mui/material';
import './App.css'
import DrawerAppBar from 'src/components/Navbar';

function App() {

  return (
    <Box sx={{height: '100vh', background: 'linear-gradient(to right bottom, #230636, #1a0930, #140929, #0e0821, #070619, #08071a, #08071a, #09081b, #100b25, #160d2f, #200c37, #2c063e);'}}>
      <DrawerAppBar/>
    </Box>
  )
}

export default App

import { createTheme } from '@mui/material/styles'

const font = 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'

export default createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#111111' },
    text: { primary: '#111111', secondary: '#666666' },
    background: { default: '#ffffff', paper: '#ffffff' },
    divider: '#e6e6e8',
  },
  shape: { borderRadius: 14 },
  typography: { fontFamily: font, button: { textTransform: 'none', fontWeight: 600 } },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 999, padding: '10px 22px' } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 500 } } },
  },
})

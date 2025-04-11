import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', p: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
        size={{ xs: 4 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form>
          <Grid container spacing={2} direction={'column'}>
            <Grid item size={{ xs: 12 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="example@example.com"
                fullWidth
              ></TextField>
            </Grid>

            <Grid item size={{ xs: 12 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="Introduce your password"
                fullWidth
              ></TextField>
            </Grid>

            <Grid container spacing={2}>
              <Grid item size={{ xs: 12 }}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item size={{ xs: 12 }}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction={'row'} justifyContent={'end'}>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

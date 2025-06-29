import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container spacing={2} direction={'column'}>
          <Grid item size={{ xs: 12 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="example@example.com"
              fullWidth
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Introduce your password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Button variant="contained" fullWidth>
                <Typography>Login</Typography>
              </Button>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={'row'} justifyContent={'end'}>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

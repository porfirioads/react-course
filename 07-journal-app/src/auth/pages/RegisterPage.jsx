import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container spacing={2} direction={'column'}>
          <Grid item size={{ xs: 12 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Porfirio Díaz"
              fullWidth
            />
          </Grid>

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
            <Grid item size={{ xs: 12 }}>
              <Button variant="contained" fullWidth>
                <Typography>Create account</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={'row'} justifyContent={'end'}>
            <Typography>Do you have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

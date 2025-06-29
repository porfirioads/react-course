import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
        }}
        size={{ xs: 12, sm: 10, md: 8, lg: 6, xl: 4 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};

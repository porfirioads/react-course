import { StarOutline } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 90, color: 'white' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Select or create an entry
        </Typography>
      </Grid>
    </Grid>
  );
};

import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../../ui';

export const NoteView = () => {
  return (
    <>
      <Grid
        container
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ mb: 1 }}
      >
        <Grid item>
          <Typography fontSize={39} fontWeight={'light'}>
            June 30th 2025
          </Typography>
        </Grid>

        <Grid item>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid>
      </Grid>

      <Grid container direction={'column'}>
        <Grid item>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Enter a title"
            label="Title"
            sx={{ border: 'none', mb: 1 }}
          />
        </Grid>

        <Grid item>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="What happened today?"
            label="Description"
            multiline
            minRows={5}
            sx={{ border: 'none', mb: 1 }}
          />
        </Grid>
      </Grid>

      <Grid container direction={'column'}>
        <ImageGallery />
      </Grid>
    </>
  );
};

import React from "react";
import Grid from "@material-ui/core/Grid";

import Editor from "../Editor/Editor";
import Preview from "../Preview/Preview";

const EditorPage: React.FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Editor />
      </Grid>
      <Grid item xs={12} md={6}>
        <Preview />
      </Grid>
    </Grid>
  );
};

export default EditorPage;

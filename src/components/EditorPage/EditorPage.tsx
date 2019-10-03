import React from "react";
import Grid from "@material-ui/core/Grid";

import Editor from "../Editor/Editor";
import Result from "../Result/Result";

const EditorPage: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Editor />
      </Grid>
      <Grid item xs={12} md={6}>
        <Result />
      </Grid>
    </Grid>
  );
};

export default EditorPage;

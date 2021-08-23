import { Grid, SkeletonLoader } from "@toptal/picasso";
import React, { Fragment } from "react";

function MoviesListLoader() {
  return (
    <Fragment>
      {[...Array(8)].map((movie, idx) => {
        return (
          <Grid.Item small={3} key={idx}>
            <SkeletonLoader.Media variant="image" width={290} height={450} />
            <SkeletonLoader.Typography />
          </Grid.Item>
        );
      })}
    </Fragment>
  );
}

export default MoviesListLoader;

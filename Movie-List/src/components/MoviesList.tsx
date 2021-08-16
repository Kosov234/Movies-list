import React, { Fragment, useEffect, useState } from "react";

export default function MoviesList() {
  const { search } = window.location;
  const [query, setQuery] = useState(new URLSearchParams(search).get("s"));

  useEffect(() => {
    console.log(query);
  });

  return <Fragment></Fragment>;
}

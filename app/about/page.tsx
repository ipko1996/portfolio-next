import WorkInProgress from "../../components/WorkInProgress";
import {NextSeo} from "next-seo";
import React from "react";

import {NEXT_SEO_DEFAULT} from "../../next-seo.config";

export default function About() {
  return (
    <React.Fragment>
      <NextSeo
        {...NEXT_SEO_DEFAULT}
        title="About"
        description={"About page"}
        useAppDir={true}
      />
      <WorkInProgress text={"About page"}/>
    </React.Fragment>
  );
}

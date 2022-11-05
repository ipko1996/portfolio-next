import WorkInProgress from "../../components/WorkInProgress";
import React from "react";
import {NextSeo} from "next-seo";
import {NEXT_SEO_DEFAULT} from "../../next-seo.config";

export default function Work() {
  return (
    <React.Fragment>
      <NextSeo
        {...NEXT_SEO_DEFAULT}
        title="Work"
        description={"My work"}
        useAppDir={true}
      />
      <WorkInProgress text={"Work page"}/>
    </React.Fragment>
  );
}

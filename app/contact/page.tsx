import React from "react";
import {NextSeo} from "next-seo";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NEXT_SEO_DEFAULT} from "../../next-seo.config";

export default function Contact() {
  return (
    <React.Fragment>
      <NextSeo
        {...NEXT_SEO_DEFAULT}
        title="Contact"
        description={"How to contact me"}
        useAppDir={true}
      />
      <div className="flex h-full items-center justify-center">
        <table className="">
          <tbody>
          <tr>
            <td className={"p-2"}>
              <FontAwesomeIcon size={"4x"} icon={faGithub}/>
            </td>
            <td className={"p-2"}>
              <a rel="noreferrer" href="https://github.com/ipko1996" target={"_blank"}>
                <h1 className={"text-2xl hover:underline"}>ipko1996</h1>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

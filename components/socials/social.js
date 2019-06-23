import React from "react";

import LinkedInIcon from "../../icons/linkedin.svg";
import GitHubIcon from "../../icons/github.svg";
import TwitterIcon from "../../icons/twitter.svg";

import SocialLink from "./social-link";
import SocialListItem from "./social-list-item";

const Social = () => (
  <nav>
    <ul>
      <SocialListItem>
        <SocialLink href="https://twitter.com/danmostudco" title="Twitter">
          <TwitterIcon />
          {"Twitter"}
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="https://github.com/danmostudco" title="GitHub">
          <GitHubIcon />
          {"GitHub"}
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink
          href="https://www.linkedin.com/in/dan-morrison-380ba379"
          title="LinkedIn"
        >
          <LinkedInIcon />
          {"LinkedIn"}
        </SocialLink>
      </SocialListItem>
    </ul>
  </nav>
);

export default Social;

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
export function onRenderBody(
  { setPostBodyComponents }
) {
  setPostBodyComponents([
  	<script
  	 type="text/javascript"
     src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e360a665ebb9323"
    />,
  ]);
}

import React, { Fragment } from "react";
import PropTypes from "prop-types";

const CenteredUI = props => {
  return (
    <Fragment>
      {props.children[0]}
      <div>
        <header className="grid__col--lg-12 grid__col--md-12 grid__col--sm-12">
          {props.children[1]}
        </header>
      </div>
      <div className="grid grid__container grid__container-centered box--bg-white">
        <section className="grid grid__col grid__col--lg-12 grid__col--md-12 grid__col--sm-12">
          <article className="grid__col grid__col--lg-12 grid__col--md-12 grid__col--sm-12">
            {props.children[2]}
          </article>
        </section>
      </div>
    </Fragment>
  );
};

CenteredUI.propTypes = {
  children: PropTypes.node
};

CenteredUI.sections = ["amp navigation only", "header", "main"];
CenteredUI.label = "Centered UI";
export default CenteredUI;

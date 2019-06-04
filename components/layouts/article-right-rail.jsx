import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ArticleRightRail = props => {
  return (
    <Fragment>
      {props.children[0]}
      <div>
        <header className="grid__col--lg-12 grid__col--md-12 grid__col--sm-12">
          {props.children[1]}
        </header>
      </div>
      <div className="grid grid__container grid__container-centered box--bg-white">
        <div
          className="grid grid__col grid__col--lg-12 grid__col--md-12 grid__col--sm-12 flex flex--justify-center"
          style={{
            padding: "6% 5%"
          }}
        >
          {props.children[2]}
        </div>
        <section className="grid grid__col grid__col--lg-12 grid__col--md-12 grid__col--sm-12">
          <article className="grid__col grid__col--lg-8 grid__col--md-8 grid__col--sm-12">
            {props.children[3]}
          </article>

          <aside className="grid__col grid__col--lg-4 grid__col--md-4 grid__col--sm-12 flex flex--align-items-center grid__column">
            {props.children[4]}
          </aside>
        </section>

        <footer className="grid__col grid__col--lg-12 grid__col--md-12 grid__col--sm-12">
          {props.children[5]}
        </footer>
      </div>
    </Fragment>
  );
};

ArticleRightRail.propTypes = {
  children: PropTypes.node
};

ArticleRightRail.sections = [
  "amp navigation only",
  "header",
  "top-furniture",
  "main",
  "sidebar",
  "footer"
];

export default ArticleRightRail;

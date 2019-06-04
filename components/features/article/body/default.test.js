import Consumer from "fusion:consumer";
import FeatureProps from "fusion:feature-props";
import React from "react";
import { shallow } from "enzyme";
import SkeletonArticleBody from "./default";

describe("<SkeletonArticleBody>", () => {
  const instance = shallow(<SkeletonArticleBody {...FeatureProps} />);

  it("should render", () => {
    expect(instance).toBeDefined();
  });

  it("renders <ArticleBody> elements", () => {
    expect(instance.html()).toContain('<section><p class="font--secondary">');
  });
});

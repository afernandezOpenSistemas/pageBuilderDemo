
npm install $(cat <<-END
@arc-core-components/amp-document-boilerplate@latest
@arc-core-components/analytics@latest
@arc-core-components/content-schema_ans-document-v0.6.2@latest
@arc-core-components/content-schema_ans-feed-v0.6.2@latest
@arc-core-components/content-source_content-api-v4@latest
@arc-core-components/content-source_site-service-v3@latest
@arc-core-components/content-source_story-feed_author-v4@latest
@arc-core-components/content-source_story-feed_sections-v4@latest
@arc-core-components/content-source_story-feed_tag-v4@latest
@arc-core-components/element_headline@latest
@arc-core-components/element_image@latest
@arc-core-components/feature_ads-arc-ad@latest
@arc-core-components/feature_article-body@latest
@arc-core-components/feature_global-amp-gallery@latest
@arc-core-components/feature_global-amp-nav@latest
@arc-core-components/feature_global-story-card@latest
@arc-core-components/tools_admin-placeholder@latest
@arc-core-components/tools_mock-ans@latest
END
) --save


package com.liferay.tiktok.web;

import com.liferay.headless.delivery.dto.v1_0.Document;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLField;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLTypeExtension;
import com.liferay.portal.vulcan.graphql.contributor.GraphQLContributor;
import org.osgi.service.component.annotations.Component;

@Component(
    immediate = true,
    service = GraphQLContributor.class
)
public class TitTokGraphQLContributor implements GraphQLContributor {

    @Override
    public String getPath() {
        return "/headless-delivery-graphql/v1_0";
    }

    @Override
    public DocumentContributor getQuery() {
        return new DocumentContributor();
    }

    public static class DocumentContributor {

        @GraphQLTypeExtension(Document.class)
        public class CreatorContributor {

            public CreatorContributor(Document document) {
            }

            @GraphQLField
            public String music() {
                return "lalala";
            }
        }
    }
}

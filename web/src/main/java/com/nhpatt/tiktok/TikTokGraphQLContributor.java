package com.nhpatt.tiktok;

import com.liferay.headless.delivery.dto.v1_0.Document;
import com.liferay.portal.vulcan.graphql.annotation.GraphQLField;
import com.liferay.portal.vulcan.graphql.contributor.GraphQLContributor;
import graphql.annotations.annotationTypes.GraphQLTypeExtension;
import org.osgi.service.component.annotations.Component;

@Component(
    immediate = true,
    service = GraphQLContributor.class
)
public class TikTokGraphQLContributor implements GraphQLContributor {
    @Override
    public String getPath() {
        return "/headless-delivery-graphql/v1_0";
    }

    @Override
    public Object getQuery() {
        return new DocumentContributor();
    }

    public static class DocumentContributor {

        @GraphQLTypeExtension(Document.class)
        public class DocumentContributorExtension {
            public DocumentContributorExtension(Document document) {

            }

            @GraphQLField
            public String musica() {
                return "lalalalal";
            }

        }
    }
}

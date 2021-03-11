# How to use the new Headless APIs and REST Builder

Code for [Devcon 2021](https://events.liferay.com/backoffice/conference/30) talk by [Javier Gamarra](https://twitter.com/nhpatt). Slides are [here](http://bit.ly/api-tips-devcon)

The idea is to a simple TikTok clone like this:

<img src="demo.gif">

-> Tested in 7.4/7.3 but Headless code is backported to 7.2 and 7.1.

## How to install

1. Launch your Liferay instance
2. Clone this repo, cd to _web_ directory and launch *npm i*
3. Run *npm start* and **Play! :)**

## Steps

1. Learn the existing APIs with **/o/api** && **/o/openapi** and the documentation
2. Show and create GIFs with the **REST APIs**
3. Use **GraphQL**
    1. Installing Apollo: _npm install @apollo/client graphql_
    2. Create an [Apollo client](https://www.apollographql.com/docs/react/get-started/)
    3. Use _useQuery_
4. Return any asset with **ContentElements API**    
5. Store and retrieve documents and web contents in the new **Asset libraries**
6. Conditionally render elements of the UI based on backend permissions with **actions**
7. Add new fields using WebContent or **RelatedContents** or **CustomFields** -> **API extensibility**
8. Let's define our API, **REST Builder**
9. Improve performance -> **fields** && **restrictFields**
10. Transform your results with **filter, search, sort and flatten**
11. Embed image with **NestedFields** & _'data:video/mp4;base64,'_
12. Return or create **all translations** & _window.navigator.language_ from _chrome://settings/languages#lang_
13. Aggregate information with **facets**
14. Disable endpoints in **headless settings**

## Links

* [Headless channel in Liferay Community Slack](https://liferay-community.slack.com/archives/CUCUYB1EE/p1599569152001000)
* [OLD Headless APIs documentation](https://help.liferay.com/hc/es/articles/360028726992-Headless-REST-APIs)
* [New Liferay Learn documentation](https://learn.liferay.com/dxp/7.x/en/headless-delivery/content_delivery_apis.html)
* [SwaggerHub](https://app.swaggerhub.com/organizations/liferayinc) (but use **/o/api**)

## Thanks

* TikTok React template from [CleverProgrammers](https://github.com/CleverProgrammers/tiktok-clone/commits/master)
* Sample videos from [Vertical Video: Current State of the Art](http://www.exit109.com/~dnn/clips/VerticalVideo.html)
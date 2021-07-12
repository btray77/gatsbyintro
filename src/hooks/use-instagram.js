import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
  /*
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          id
          caption
          username
          localFile {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);*/

  const data = {
    allInstaNode: {
      nodes: [
        {
          id: 'CQ_7c8zDFEv',
          caption:
            '🌟Gatsby v3.9\n\nhttps://www.gatsbyjs.com/docs/reference/release-notes/v3.9/\n\nKey highlights include: \n🔵React 18: Support new Suspense SSR Architecture.\n🟢Shopify app for Gatsby Cloud.\n🟠Quality of life improvements to gatsby-source-contentful.\n\n💜Where would we be without all the community contributors? Thank you!',
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/f11ff8f2e805575d53c39a5ce033b025/58a4b/211510090_1064385724396061_4032885442207708771_n.jpg 30w,\n/static/f11ff8f2e805575d53c39a5ce033b025/56ed0/211510090_1064385724396061_4032885442207708771_n.jpg 60w,\n/static/f11ff8f2e805575d53c39a5ce033b025/76539/211510090_1064385724396061_4032885442207708771_n.jpg 120w,\n/static/f11ff8f2e805575d53c39a5ce033b025/a8ad2/211510090_1064385724396061_4032885442207708771_n.jpg 180w,\n/static/f11ff8f2e805575d53c39a5ce033b025/f8398/211510090_1064385724396061_4032885442207708771_n.jpg 240w,\n/static/f11ff8f2e805575d53c39a5ce033b025/29667/211510090_1064385724396061_4032885442207708771_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'COxrXWJgVBi',
          caption:
            '💥 Gatsby v3.5 is here. \n\nDX:\n▪️ ~ 20% faster Gatsby CLI startup.\n▪️ Gatsby v3 compatibility for Gatsby Source GraphQL Toolkit.\n\nBuild perf:\n▪️ ~ 20% faster query running.\n▪️ ~ 70% faster page creation.\n▪️ ~ 50% drop in peak memory utilization.\n\n👉🏾 https://www.gatsbyjs.com/docs/reference/release-notes/v3.5/\n\n👂Let us know in the comments below what’s got your attention in this release!',
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/97329d5e7f4b94e942308f6b3352125a/58a4b/185238141_312733403552075_2895418528321875206_n.jpg 30w,\n/static/97329d5e7f4b94e942308f6b3352125a/56ed0/185238141_312733403552075_2895418528321875206_n.jpg 60w,\n/static/97329d5e7f4b94e942308f6b3352125a/76539/185238141_312733403552075_2895418528321875206_n.jpg 120w,\n/static/97329d5e7f4b94e942308f6b3352125a/a8ad2/185238141_312733403552075_2895418528321875206_n.jpg 180w,\n/static/97329d5e7f4b94e942308f6b3352125a/f8398/185238141_312733403552075_2895418528321875206_n.jpg 240w,\n/static/97329d5e7f4b94e942308f6b3352125a/29667/185238141_312733403552075_2895418528321875206_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'CQcEWSDje1t',
          caption:
            '🪐 Gatsby v3.8\n\nhttps://www.gatsbyjs.com/docs/reference/release-notes/v3.8/\n\nKey highlights:\n✨React 18 Alpha is available in Gatsby.\n✨Analytics plugins now support tracking Web Vitals.\n✨Built-in persistent webpack caching activated for everyone.\n⚡Sourcing in Drupal is up to 30%+ faster and more reliable.\n\n💜 Thank you to all the Contributors who worked on this release!\n\n*You can find the link in our bio.',
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/f5dd87ed34a970aac2e20737caaa1fad/58a4b/206163765_4174951382593081_3443786593151096728_n.jpg 30w,\n/static/f5dd87ed34a970aac2e20737caaa1fad/56ed0/206163765_4174951382593081_3443786593151096728_n.jpg 60w,\n/static/f5dd87ed34a970aac2e20737caaa1fad/76539/206163765_4174951382593081_3443786593151096728_n.jpg 120w,\n/static/f5dd87ed34a970aac2e20737caaa1fad/a8ad2/206163765_4174951382593081_3443786593151096728_n.jpg 180w,\n/static/f5dd87ed34a970aac2e20737caaa1fad/f8398/206163765_4174951382593081_3443786593151096728_n.jpg 240w,\n/static/f5dd87ed34a970aac2e20737caaa1fad/29667/206163765_4174951382593081_3443786593151096728_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'CNnt2Qdgq3H',
          caption:
            '🔥 Gatsby v3.3\n﻿\n﻿What’s new:\n﻿🚀 Performance optimizations: improvements to JavaScript bundling, up to 30-40%\n﻿📝 Upgrade to latest Remark packages\n﻿🎨 Upgrade to the latest Sharp release, support for M1 Macbooks and other improvements\n﻿\n﻿Link is in our bio.\nhttps://gatsbyjs.com/docs/reference/release-notes/v3.3\n﻿',
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/b2e23ee6eb6638b7a5969cea5566840a/58a4b/172511560_841789846373750_1293053961429839138_n.jpg 30w,\n/static/b2e23ee6eb6638b7a5969cea5566840a/56ed0/172511560_841789846373750_1293053961429839138_n.jpg 60w,\n/static/b2e23ee6eb6638b7a5969cea5566840a/76539/172511560_841789846373750_1293053961429839138_n.jpg 120w,\n/static/b2e23ee6eb6638b7a5969cea5566840a/a8ad2/172511560_841789846373750_1293053961429839138_n.jpg 180w,\n/static/b2e23ee6eb6638b7a5969cea5566840a/f8398/172511560_841789846373750_1293053961429839138_n.jpg 240w,\n/static/b2e23ee6eb6638b7a5969cea5566840a/29667/172511560_841789846373750_1293053961429839138_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'CP3qv1WABFO',
          caption:
            "🔥 Gatsby 3.7 —  What's in it?\n\n🍾 Functions: Now generally available!\n\n⚡️ Webpack caching: Makes warm webpack builds 50%+ faster! Started rollout to 20% of sites.\n\n📦 LMDB: An experimental integration with LMDB which helps larger sites.\n\nAll the details: https://www.gatsbyjs.com/docs/reference/release-notes/v3.7/\n\nThe link is also in our bio!",
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/59723415ce9733ee8e9f3faaf5a512c4/58a4b/198757436_213241250629209_6412210844870980805_n.jpg 30w,\n/static/59723415ce9733ee8e9f3faaf5a512c4/56ed0/198757436_213241250629209_6412210844870980805_n.jpg 60w,\n/static/59723415ce9733ee8e9f3faaf5a512c4/76539/198757436_213241250629209_6412210844870980805_n.jpg 120w,\n/static/59723415ce9733ee8e9f3faaf5a512c4/a8ad2/198757436_213241250629209_6412210844870980805_n.jpg 180w,\n/static/59723415ce9733ee8e9f3faaf5a512c4/f8398/198757436_213241250629209_6412210844870980805_n.jpg 240w,\n/static/59723415ce9733ee8e9f3faaf5a512c4/29667/198757436_213241250629209_6412210844870980805_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'COvr3uagQgo',
          caption:
            "📰 It's baaaaaack...\n﻿\n﻿💜 There's loads to catch up on so just like the title says, we're jumping into the May edition of the Gatsby Gazette!\n﻿\nYou can find the link in our bio. \n﻿👉🏾 https://www.gatsbyjs.com/blog/may-2021-gazette\n﻿\n﻿",
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/c4aa8fd1a1181de73983b430769fdc6e/58a4b/184606155_1131274464011258_6193551562091773637_n.jpg 30w,\n/static/c4aa8fd1a1181de73983b430769fdc6e/56ed0/184606155_1131274464011258_6193551562091773637_n.jpg 60w,\n/static/c4aa8fd1a1181de73983b430769fdc6e/76539/184606155_1131274464011258_6193551562091773637_n.jpg 120w,\n/static/c4aa8fd1a1181de73983b430769fdc6e/a8ad2/184606155_1131274464011258_6193551562091773637_n.jpg 180w,\n/static/c4aa8fd1a1181de73983b430769fdc6e/f8398/184606155_1131274464011258_6193551562091773637_n.jpg 240w,\n/static/c4aa8fd1a1181de73983b430769fdc6e/29667/184606155_1131274464011258_6193551562091773637_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'CRCM-hYDlAJ',
          caption:
            '🚨 New Gatsby + @shopify demo alert AND a limited edition swag giveaway! \n\nhttps://500bottles.gatsbyjs.io\n\n🍾 Give the bottle a spin for your chance to win then learn how to build your own headless Shopify site using Gatsby!\n\n🕺🏼 @pauliescanlon shares step-by-step how he created this demo and how you can build your own today on the Gatsby Blog!\n\n👉🏾 https://www.gatsbyjs.com/blog/how-we-made-the-gatsby-500-bottles-giveaway/\n\n🔗 You can find the link in our bio.',
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/5b72f22d85a930538818d0848b075348/58a4b/210591076_907103543202574_3379312294488146953_n.jpg 30w,\n/static/5b72f22d85a930538818d0848b075348/56ed0/210591076_907103543202574_3379312294488146953_n.jpg 60w,\n/static/5b72f22d85a930538818d0848b075348/76539/210591076_907103543202574_3379312294488146953_n.jpg 120w,\n/static/5b72f22d85a930538818d0848b075348/a8ad2/210591076_907103543202574_3379312294488146953_n.jpg 180w,\n/static/5b72f22d85a930538818d0848b075348/f8398/210591076_907103543202574_3379312294488146953_n.jpg 240w,\n/static/5b72f22d85a930538818d0848b075348/29667/210591076_907103543202574_3379312294488146953_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'CNkVRCygl8f',
          caption:
            "💯 Happy 100th day of the year! And, If you're participating in #100DaysOfGatsby, congratulations — You made it!\n﻿\n﻿🥳 Check out the recap blog post below including links to all the challenge Briefs, Help resources, and Solve videos.\n﻿\n﻿🔗 You can find the link in our bio. \nhttps://www.gatsbyjs.com/blog/100days-finish-line\n﻿\n﻿",
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/aa05e3a2d3441b6b1a5c51651173d806/58a4b/171285475_1366230207086989_6920545290525731655_n.jpg 30w,\n/static/aa05e3a2d3441b6b1a5c51651173d806/56ed0/171285475_1366230207086989_6920545290525731655_n.jpg 60w,\n/static/aa05e3a2d3441b6b1a5c51651173d806/76539/171285475_1366230207086989_6920545290525731655_n.jpg 120w,\n/static/aa05e3a2d3441b6b1a5c51651173d806/a8ad2/171285475_1366230207086989_6920545290525731655_n.jpg 180w,\n/static/aa05e3a2d3441b6b1a5c51651173d806/f8398/171285475_1366230207086989_6920545290525731655_n.jpg 240w,\n/static/aa05e3a2d3441b6b1a5c51651173d806/29667/171285475_1366230207086989_6920545290525731655_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'CNDViqqjJDW',
          caption:
            "💥 Gatsby v3.2\n﻿\n﻿🤯 If 'Static Image' has ever given you a static headache, good news! It's now easier to find and correct the offending code.\n﻿\n﻿➕ We've added adjustable ES Modules option for CSS Modules, sped up Contentful build times, and more.\n﻿\n﻿👇🏾 Details: \nhttps://www.gatsbyjs.com/docs/reference/release-notes/v3.2/\n﻿",
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/5d2c96203c81c8ef68b21eb73aaf032f/58a4b/166065637_987800231755017_7885265971106684363_n.jpg 30w,\n/static/5d2c96203c81c8ef68b21eb73aaf032f/56ed0/166065637_987800231755017_7885265971106684363_n.jpg 60w,\n/static/5d2c96203c81c8ef68b21eb73aaf032f/76539/166065637_987800231755017_7885265971106684363_n.jpg 120w,\n/static/5d2c96203c81c8ef68b21eb73aaf032f/a8ad2/166065637_987800231755017_7885265971106684363_n.jpg 180w,\n/static/5d2c96203c81c8ef68b21eb73aaf032f/f8398/166065637_987800231755017_7885265971106684363_n.jpg 240w,\n/static/5d2c96203c81c8ef68b21eb73aaf032f/29667/166065637_987800231755017_7885265971106684363_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'CMhUuahDyqI',
          caption:
            "🔥 Gatsby v3.1\n﻿\n﻿🖤 🤍 Gatsby's Fast Refresh modal now respects the 'prefers-color-scheme' setting from your operating system.\n﻿\n﻿✅ Improved Error Messages.\n﻿\n﻿🖼️ And, @contentful.inc now fully supports gatsby-plugin-image out of the box.\n﻿\n﻿➡️ https://www.gatsbyjs.com/docs/reference/release-notes/v3.1/",
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/af3cf945ab9852758f378429d6ff5410/58a4b/161249454_931117157706579_7840340030126840256_n.jpg 30w,\n/static/af3cf945ab9852758f378429d6ff5410/56ed0/161249454_931117157706579_7840340030126840256_n.jpg 60w,\n/static/af3cf945ab9852758f378429d6ff5410/76539/161249454_931117157706579_7840340030126840256_n.jpg 120w,\n/static/af3cf945ab9852758f378429d6ff5410/a8ad2/161249454_931117157706579_7840340030126840256_n.jpg 180w,\n/static/af3cf945ab9852758f378429d6ff5410/f8398/161249454_931117157706579_7840340030126840256_n.jpg 240w,\n/static/af3cf945ab9852758f378429d6ff5410/29667/161249454_931117157706579_7840340030126840256_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'CP3J0WFA9m5',
          caption:
            '🎉 Announcing: Functions on Gatsby Cloud! \n\nNow, stay code-focused while simultaneously building dynamic functionality with features like these into your website:\n🔹Authentication\n🔹Personalization\n🔹Form submissions\n🔹Real-time secure data updates\n🔹Etc.\n\nLearn more and get started now: https://www.gatsbyjs.com/blog/announcing-launch-of-functions-on-gatsby-cloud',
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/b6d90f35756627e494703b6b7f6ac3d2/58a4b/198217948_408837890157282_5892376465581955351_n.jpg 30w,\n/static/b6d90f35756627e494703b6b7f6ac3d2/56ed0/198217948_408837890157282_5892376465581955351_n.jpg 60w,\n/static/b6d90f35756627e494703b6b7f6ac3d2/76539/198217948_408837890157282_5892376465581955351_n.jpg 120w,\n/static/b6d90f35756627e494703b6b7f6ac3d2/a8ad2/198217948_408837890157282_5892376465581955351_n.jpg 180w,\n/static/b6d90f35756627e494703b6b7f6ac3d2/f8398/198217948_408837890157282_5892376465581955351_n.jpg 240w,\n/static/b6d90f35756627e494703b6b7f6ac3d2/29667/198217948_408837890157282_5892376465581955351_n.jpg 1080w',
              },
            },
          },
        },
        {
          id: 'CO3jwrDrYxv',
          caption:
            '📆Save the Date — Gatsby live stream May 19th: 10am PT | 1pm ET | 5pm UTC. \n👉https://twitch.tv/gatsbyjs\n\nLennart Jörgens & Megan Sullivan demonstrate best practices to build a robust, high quality e-commerce proof of concept in 1 hour 🚀without sacrificing quality or creating tech debt.',
          username: '8385666633',
          localFile: {
            childImageSharp: {
              fluid: {
                srcSet:
                  '/static/fbb7ae3e1a2013ca4b4562ac8d6eb051/58a4b/185269560_500239361024119_9149969454654571159_n.jpg 30w,\n/static/fbb7ae3e1a2013ca4b4562ac8d6eb051/56ed0/185269560_500239361024119_9149969454654571159_n.jpg 60w,\n/static/fbb7ae3e1a2013ca4b4562ac8d6eb051/76539/185269560_500239361024119_9149969454654571159_n.jpg 120w,\n/static/fbb7ae3e1a2013ca4b4562ac8d6eb051/a8ad2/185269560_500239361024119_9149969454654571159_n.jpg 180w,\n/static/fbb7ae3e1a2013ca4b4562ac8d6eb051/f8398/185269560_500239361024119_9149969454654571159_n.jpg 240w,\n/static/fbb7ae3e1a2013ca4b4562ac8d6eb051/29667/185269560_500239361024119_9149969454654571159_n.jpg 1080w',
              },
            },
          },
        },
      ],
    },
    extensions: {},
  };

  return data.allInstaNode.nodes.map(node => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.username,
  }));
};

export default useInstagram;

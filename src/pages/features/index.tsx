import { Helmet } from 'react-helmet-async';
import { BASE_URL } from '@/core/config';
import { ROUTES } from '@/core/constants';

export const FeaturesPage = () => {
  return (
    <>
      <Helmet>
        {/* base meta tags */}
        <title>Features - Baller Bot Basketball Game</title>
        <meta
          name="description"
          content="Discover all the amazing features of Baller Bot: animated stickers, real-time gameplay, Basketball 33 rules, multiplayer support and more!"
        />
        <meta
          name="keywords"
          content="baller bot features, telegram bot games, basketball stickers, multiplayer telegram, basketball 33 features"
        />
        <link rel="canonical" href={`${BASE_URL}${ROUTES.FEATURES}`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE_URL}${ROUTES.FEATURES}`} />
        <meta
          property="og:title"
          content="Features - Baller Bot Basketball Game"
        />
        <meta
          property="og:description"
          content="Discover all the amazing features of Baller Bot: animated stickers, real-time gameplay, Basketball 33 rules, multiplayer support and more!"
        />
        <meta property="og:image" content="/meta-image.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${BASE_URL}${ROUTES.FEATURES}`}
        />
        <meta
          property="twitter:title"
          content="Features - Baller Bot Basketball Game"
        />
        <meta
          property="twitter:description"
          content="Discover all the amazing features of Baller Bot: animated stickers, real-time gameplay, Basketball 33 rules, multiplayer support and more!"
        />
        <meta property="twitter:image" content="/meta-image.png" />
      </Helmet>
      <div className="relative z-10">Features</div>
    </>
  );
};

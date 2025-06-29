import { Helmet } from 'react-helmet-async';
import { BASE_URL } from '@/core/config';
import { ROUTES } from '@/core/constants';

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        {/* base meta tags */}
        <title>About Baller Bot - Telegram Basketball Game</title>
        <meta
          name="description"
          content="Learn more about Baller Bot, the innovative Telegram bot that brings Basketball 33 game to your chats with animated stickers and interactive gameplay."
        />
        <meta
          name="keywords"
          content="about baller bot, telegram basketball, bot features, basketball 33 rules"
        />
        <link rel="canonical" href={`${BASE_URL}${ROUTES.ABOUT}`} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE_URL}${ROUTES.ABOUT}`} />
        <meta
          property="og:title"
          content="About Baller Bot - Telegram Basketball Game"
        />
        <meta
          property="og:description"
          content="Learn more about Baller Bot, the innovative Telegram bot that brings Basketball 33 game to your chats with animated stickers and interactive gameplay."
        />
        <meta property="og:image" content="/meta-image.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${BASE_URL}${ROUTES.ABOUT}`} />
        <meta
          property="twitter:title"
          content="About Baller Bot - Telegram Basketball Game"
        />
        <meta
          property="twitter:description"
          content="Learn more about Baller Bot, the innovative Telegram bot that brings Basketball 33 game to your chats with animated stickers and interactive gameplay."
        />
        <meta property="twitter:image" content="/meta-image.png" />
      </Helmet>

      <div>AboutPage</div>
    </>
  );
};

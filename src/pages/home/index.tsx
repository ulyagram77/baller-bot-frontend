import { Helmet } from 'react-helmet-async';
import { BASE_URL } from '@/core/config';
import { decoration } from '@/assets/img';
import { Hero } from './hero';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        {/* base meta tags */}
        <title>Baller Bot - Play Basketball 33 in Telegram</title>
        <meta
          name="description"
          content="Play Basketball 33 with Baller-Bot on Telegram! Use animated basketball stickers to challenge the bot and score points. Fun, fast, and interactive."
        />
        <meta
          name="keywords"
          content="telegram bot, basketball game, 33 basketball, telegram games, basketball stickers, interactive bot"
        />
        <link rel="canonical" href={BASE_URL} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE_URL} />
        <meta
          property="og:title"
          content="Baller Bot - A Telegram Bot for 33 Basketball Game"
        />
        <meta
          property="og:description"
          content="Play Basketball 33 with Baller-Bot on Telegram! Use animated basketball stickers to challenge the bot and score points. Fun, fast, and interactive."
        />
        <meta property="og:image" content="/meta-image.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={BASE_URL} />
        <meta
          property="twitter:title"
          content="Baller Bot - A Telegram Bot for 33 Basketball Game"
        />
        <meta
          property="twitter:description"
          content="Play Basketball 33 with Baller-Bot on Telegram! Use animated basketball stickers to challenge the bot and score points. Fun, fast, and interactive."
        />
        <meta property="twitter:image" content="/meta-image.png" />
      </Helmet>
      <Hero />
      <img
        className="absolute top-0 left-0 z-0 h-[1300px] w-full object-cover"
        src={decoration}
        alt="decoration"
      />
    </>
  );
};

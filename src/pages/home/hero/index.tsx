import { introImg } from '@/assets/img';

export const Hero = () => {
  return (
    <section className="relative z-10 pt-24">
      <div className="app-container">
        <div className="mb-24 grid justify-center gap-y-12 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Telegram baller bot</h3>
            <h1 className="text-6xl font-bold">
              Play basketball right in Telegram
            </h1>
          </div>

          <div className="max-w-[470px] justify-self-center leading-relaxed text-balance">
            <p>
              Shoot, pass, and score using animated basketball stickers. <br />
              <span className="text-[#252B42]">
                No downloads. No signups. Just play.
              </span>
            </p>
          </div>

          <div>
            <a
              className="rounded-4xl bg-white px-14 py-4 text-xl font-bold text-[#2091F9]"
              href="https://t.me/hoop33_bot
"
            >
              Try For Free
            </a>
          </div>
        </div>

        <img src={introImg} alt="intro image" className="mx-auto" />
      </div>
    </section>
  );
};

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

interface SettingSliderProps {
  className: string;
}

interface Props {
  game: GameBannerProps;
  setting: SettingSliderProps;
}

export function GameBanner({ game, setting }: Props) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${setting.className}`}>
      <img src={game.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{game.title}</strong>

        {game.adsCount == 0 ? (
          <span className="text-zinc-300 text-sm mt-1"> Nenhum anúncio </span>
        ) : (
          <span className="text-zinc-300 text-sm mt-1">
            {game.adsCount} {game.adsCount > 1 ? "anúncios" : "anúncio"}
          </span>
        )}
      </div>
    </div>
  );
}

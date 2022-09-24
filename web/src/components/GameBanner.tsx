interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
  className : string;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${props.className}`}>
      <img src={props.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>

        {props.adsCount == 0 ? (
          <span className="text-zinc-300 text-sm mt-1"> Nenhum anúncio </span>
        ) : (
          <span className="text-zinc-300 text-sm mt-1">
            {props.adsCount} {props.adsCount > 1 ? "anúncios" : "anúncio"}
          </span>
        )}
      </div>
    </div>
  );
}

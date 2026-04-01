interface CardContent {
  symbol: string,
  cardTitle: string,
  cardMessage: string,
  buttonLabel: string,
  cardType: string
}

export default function FormSubmitCard({ cardContent, onButtonClick } : { cardContent: CardContent, onButtonClick: () => void }) {
  return (
    <div
      className={
        "flex flex-col items-start gap-4 p-8 rounded-2xl border " +
        (cardContent.cardType === "sent" ? "border-accent/20 bg-accent/4" : "border-red-500/20 bg-red-500/4")
      }
    >
      <span className="text-2xl">{cardContent.symbol}</span>
      <h3 className="font-syne font-bold text-[20px] text-foreground">
        {cardContent.cardTitle}
      </h3>
      <p className="text-[14px] text-muted">
        {cardContent.cardMessage}
      </p>
      <button
        onClick={onButtonClick}
        className={
          "mt-2 text-[13px] font-semibold transition-opacity " +
          (cardContent.cardType === "sent" ? "text-accent/70 hover:text-accent" : "text-red-400/70 hover:text-red-400")
        }
      >
        {cardContent.buttonLabel}
      </button>
    </div>
  );
}
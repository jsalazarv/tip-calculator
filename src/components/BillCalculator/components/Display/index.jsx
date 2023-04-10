import './styles.css';

export const Display = ({
  tipAmountPerPerson,
  totalPerPerson,
  handleReset,
}) => {
  return (
    <div className="tip-calculator-display flex flex-col justify-between">
      <div className="gap-6 flex flex-col">
        <div className="display-data-container">
          <div>
            <p className="display-titles">Tip Amount</p>
            <p className="display-subtitles">/ person</p>
          </div>
          <div>
            <p className="display-quantities">
              ${tipAmountPerPerson.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="display-data-container">
          <div>
            <p className="display-titles">Total</p>
            <p className="display-subtitles">/ person</p>
          </div>
          <div>
            <p className="display-quantities">${totalPerPerson.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <button
        className={`btn btn-default ${tipAmountPerPerson === 0 && 'disabled'}`}
        onClick={() => handleReset()}
        disabled={tipAmountPerPerson === 0}>
        RESET
      </button>
    </div>
  );
};

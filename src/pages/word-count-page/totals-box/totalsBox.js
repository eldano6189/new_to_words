export default function TotalsBox({ text, number }) {
  return (
    <>
      <div className="totals-box">
        <div className="box-text">
          <h3>{text}</h3>
        </div>
        <div className="box-number">
          <h3>{number}</h3>
        </div>
      </div>
      <style jsx>{`
        .totals-box {
          width: 30%;
          height: 20%;
          padding-right: 2%;
        }

        .box-text {
          padding: 1%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px solid #c4c4c444;
        }

        .box-text h3 {
          font-size: 1.6vh !important;
          white-space: nowrap;
          color: var(--main-color) !important;
        }

        .box-number {
          padding: 1%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .box-number h3 {
          color: var(--fourth-color) !important;
          font-size: 2.5vh !important;
        }
      `}</style>
    </>
  );
}

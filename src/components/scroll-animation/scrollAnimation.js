export default function ScrollAnimation() {
  return (
    <>
      <div className="container-mouse-anim">
        <div className="container-mouse">
          <div className="mouse-motion"></div>
        </div>
      </div>
      <style jsx>{`
        .container-mouse-anim {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 20vh;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
        }

        .container-mouse {
          height: 6vh;
          width: 3vh;
          border-radius: 2vh;
          border: 2px solid var(--main-color);
          transform: translateY(-2vh);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mouse-motion {
          height: 0.5vh;
          width: 0.5vh;
          border-radius: 2vh;
          background-color: var(--main-color);
          animation: scroll-anim 2s ease infinite;
        }

        @keyframes scroll-anim {
          0% {
            transform: translateY(-2vh);
          }
          100% {
            opacity: 0;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

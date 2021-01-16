export default function AmazonBanner({ src, title, height, width }) {
  return (
    <>
      <div
        className={
          height === "60"
            ? "container-amazon-468x60"
            : "container-amazon-728x90"
        }
      >
        <iframe
          title={title}
          src={src}
          width={width}
          height={height}
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
      <style jsx>{`
        .container-advert-link {
          width: 100%;
          height: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 10%;
          overflow: hidden;
        }

        .container-advert-link a {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container-advert-link img {
          width: 100%;
          height: auto;
        }

        .container-amazon-468x60,
        .container-amazon-728x90 {
          width: 100%;
          height: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 10%;
          overflow: hidden;
        }

        .container-amazon-468x60 iframe,
        .container-amazon-728x90 iframe {
          border: 0;
          margin: 0;
        }

        @media screen and (min-width: 1920px) {
          .container-amazon-728x90 iframe {
            transform: scale(1.4);
          }
        }

        @media screen and (max-width: 800px) {
          .container-amazon-728x90 iframe {
            transform: scale(0.6);
          }
        }

        @media screen and (max-width: 500px) {
          .container-amazon-728x90 iframe {
            transform: scale(0.5);
          }
        }

        @media screen and (max-width: 400px) {
          .container-amazon-728x90 iframe {
            transform: scale(0.4);
          }
        }

        /**/

        @media screen and (max-width: 1200px) {
          .container-amazon-468x60 iframe {
            transform: scale(0.8);
          }
        }

        @media screen and (max-width: 950px) {
          .container-amazon-468x60 iframe {
            transform: scale(0.7);
          }
        }

        @media screen and (max-width: 850px) and (orientation: portrait) {
          .container-amazon-468x60 iframe {
            transform: scale(1.4);
          }
        }

        @media screen and (max-width: 750px) and (orientation: portrait) {
          .container-amazon-468x60 iframe {
            transform: scale(1.1);
          }
        }

        @media screen and (max-width: 550px) and (orientation: portrait) {
          .container-amazon-468x60 iframe {
            transform: scale(0.7);
          }
        }

        @media screen and (max-width: 350px) and (orientation: portrait) {
          .container-amazon-468x60 iframe {
            transform: scale(0.5);
          }
        }

        @media screen and (max-width: 830px) and (orientation: landscape) {
          .container-amazon-468x60 iframe {
            transform: scale(0.6);
          }
        }

        @media screen and (max-width: 700px) and (orientation: landscape) {
          .container-amazon-468x60 iframe {
            transform: scale(0.5);
          }
        }

        @media screen and (max-width: 600px) and (orientation: landscape) {
          .container-amazon-468x60 iframe {
            transform: scale(0.4);
          }
        }
      `}</style>
    </>
  );
}

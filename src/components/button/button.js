import Link from "next/link";

export default function Button({ children, click, type, look, href }) {
  return (
    <>
      <Link href={href}>
        <button className={look} onClick={click} type={type}>
          {children}
        </button>
      </Link>
      <style jsx>{`
        .full {
          background-color: var(--main-color);
          width: 16vh;
          height: 5vh;
          margin: 0 1% 0 0;
          color: white;
          font-weight: 300;
          font-size: 2vh;
          border: 3px solid var(--main-color);
          transition: all 0.3s ease;
        }

        .full:hover {
          color: white;
          background-color: var(--secondary-color);
          border: 3px solid var(--main-color);
        }

        .hollow {
          background-color: transparent;
          width: 16vh;
          height: 5vh;
          margin: 0 1% 0 0;
          color: white;
          font-weight: 300;
          font-size: 2vh;
          border: 3px solid var(--main-color);
          transition: all 0.3s ease;
        }

        .hollow:hover {
          color: white;
          background-color: var(--secondary-color);
          border: 3px solid var(--main-color);
        }
      `}</style>
    </>
  );
}

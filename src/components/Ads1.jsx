export default function Ads2({url}) {
  return (
    <>
      <div className="ads">
        <iframe
          data-aa={url.split("/")[3].split("?")[0]}
          src={url}
          className="iframe"
        ></iframe>

      </div>
      <style jsx>{`
        .ads {
          display: grid;
          place-content: center;
          padding: 1rem 0;
          background: var(--color-1);
          overflow: hidden;
        }
        .iframe {
          width: 728px;
          height: 90px;
          border: 0px;
          padding: 0;
          overflow: hidden;
          background-color: transparent;
        .iframe {
          width: 728px;
          height: 90px;
          border: 0px;
          padding: 0;
          overflow: hidden;
          background-color: transparent;
          position: fixed;
          top: 0;
          left: 110%;
        }
        }
      `}</style>
    </>
  );
}
export default function UrlModal({ onClose, error, msg, desc, btnText }) {

  function handleSubmit(e) {
    e.preventDefualt();
  }


  return (
    <>
      {error && <h1>{error}</h1>}
      <form method="post" onSubmit={handleSubmit} className="url-modal">
        <img src="https://logowik.com/content/uploads/images/close1437.jpg" 
            width={50}
            onClick={onClose} 
            alt="close" />
        <h2>{msg}</h2>
        <h3>{desc}</h3>
        <label>
          URL <input />
        </label>
        <button type="submit" className="submit">{btnText}</button>
      </form>
    </>
  );
}
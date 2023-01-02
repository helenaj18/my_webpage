import '../css/pdfs.css'

function PortaplantsComponent() {
  return (
    <div className="Portaplants">
      <div className = "header">
            <p>PORTAPLANTS</p>
      </div>
        <iframe src="../portaplants_lokaskyrsla.pdf#view=fit&toolbar=0&navpanes=0"
      width="1000px" height="1200px" title="resume_iframe"></iframe>
    </div>
  );
}

export default PortaplantsComponent;

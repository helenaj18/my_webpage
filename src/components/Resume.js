import '../css/resume.css'

function ResumeComponent() {
  return (
    <div className="Resume">
      <div className = "header">
            <h1>Resume</h1>
      </div>
        <iframe src="resume_hsj_use.pdf#view=fit&toolbar=0&navpanes=0"
      width="1000px" height="1200px" title="resume_iframe"></iframe>
    </div>
  );
}

export default ResumeComponent;

import Button from "./Button";
import "remixicon/fonts/remixicon.css";
import resume from "../../../assets/Muhammad_Umer_Yousaf_Software_Engineer.pdf";


function HeroButtons() {
  const handleProjects = () => {
    const section = document.getElementById("projects")
    section?.scrollIntoView({ behavior: "smooth"})
  };

  const handleResume = () => {
    window.open(resume, "_blank");

    const link = document.createElement("a");
    link.href = resume;
    link.download = "Muhammad_Umer_Yousaf_Software_Engineer.pdf";
    link.click();
  };

  const handleContact = () => {
    window.location.href = "mailto:umeryousaf2020@gmail.com"
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        onClick={handleProjects}
        variant="primary"
        icon={<i className="ri-arrow-right-line shrink-0"></i>}
      >
        View Projects
      </Button>

      <Button
        onClick={handleResume}
        variant="secondary"
        icon={<i className="ri-download-line shrink-0"></i>}
      >
        Resume
      </Button>

      <Button
        onClick={handleContact}
        variant="outline"
        icon={<i className="ri-mail-line shrink-0"></i>}
      >
        Contact
      </Button>
    </div>
  );
}

export default HeroButtons;
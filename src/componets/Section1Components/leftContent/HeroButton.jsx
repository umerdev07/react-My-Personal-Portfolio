import Button from "./Button";
import "remixicon/fonts/remixicon.css";

function HeroButtons() {
  const handleProjects = () => alert("Projects Button Clicked");
  const handleResume = () => alert("Resume Button Clicked");
  const handleContact = () => alert("Contact Button Clicked");

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
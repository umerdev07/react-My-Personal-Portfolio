import Button from "./Button";
import "remixicon/fonts/remixicon.css";

function HeroButtons() {
  const handleProjects = () => {
    alert("Projects Button Clicked");
  };

  const handleResume = () => {
    alert("Resume Button Clicked");
  };

  const handleContact = () => {
    alert("Contact Button Clicked");
  };
  return (
    <div className="flex gap-4">
      <Button onClick={handleProjects} variant="primary" icon={<i className="ri-arrow-right-line"></i>}>
        View Projects
      </Button>

      <Button onClick={handleResume} variant="secondary" icon={<i className="ri-download-line"></i>}>
        Resume
      </Button>

      <Button onClick={handleContact} variant="outline" icon={<i className="ri-mail-line"></i>}>
        Contact
      </Button>
    </div>
  );
}

export default HeroButtons
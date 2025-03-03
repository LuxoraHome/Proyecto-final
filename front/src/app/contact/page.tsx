import TimelineSlider from "@/components/timeSlider/timeSlider";
import ContactCard from "@/components/contact/contact";

function Contact() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute bottom-8 right-8 m-4">
        <ContactCard />
      </div>

      


      <div>
        <TimelineSlider />
      </div>
    </div>
  );
}

export default Contact;

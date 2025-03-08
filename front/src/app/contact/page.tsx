import TimelineSlider from "@/components/timeSlider/timeSlider";
import ContactCard from "@/components/contact/contact";

function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <TimelineSlider />
      <div className="w-full flex justify-center mt-8">
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;

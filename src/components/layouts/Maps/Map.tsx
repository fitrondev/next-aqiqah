import { cn } from "@/lib/utils";

const Map = ({ className }: { className?: string }) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252481.40453203116!2d116.03838437204648!3d-8.593887926074036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf518aecf7e9%3A0xf3be90f1220e0b2!2sAqiqah%20Lombok!5e0!3m2!1sid!2sid!4v1731380333359!5m2!1sid!2sid"
      className={cn("w-full h-96", className)}
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
};
export default Map;

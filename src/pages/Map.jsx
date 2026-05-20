export default function Map() {
  return (
    <div className="h-[400px]">
      <iframe
        className="w-full h-full"
        loading="lazy"
        src="https://maps.google.com/maps?q=Railway%20General%20Hospital%20Rawalpindi&t=&z=15&output=embed"
      />
    </div>
  );
}
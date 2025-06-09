// components/MapSection.jsx
export default function MapSection() {
    const mapURL = "https://img.freepik.com/premium-vector/world-map-with-word-world-it_1224819-5325.jpg?semt=ais_hybrid&w=740"
    return (
        <section className="bg-gray-800 flex justify-center items-center h-[350px]">
            <img src={mapURL} alt="세계지도" className="h-full object-contain" />
        </section>
    );
}

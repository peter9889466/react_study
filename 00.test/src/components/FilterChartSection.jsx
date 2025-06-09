// components/FilterChartSection.jsx
export default function FilterChartSection() {
    const chartURL = "src/assets/Chart.png"
    const searchButton = () => {

    }

    return (
        <section className="p-4 bg-white">
            <div className="flex flex-wrap gap-4 justify-center mb-4">
                <select className="border p-2 rounded">
                    <option>품목 토글</option>
                    <option>태양전지 모듈 (Solar cells)</option>
                    <option>풍력 발전기</option>
                    <option>인버터 (태양광용)</option>
                    <option>바이오가스 발생기</option>
                    <option>비직조 생분해성 원단</option>
                    <option>생분해성 플라스틱 포장재</option>
                    <option>바이오매스 연료 (목재펠릿 등)</option>
                    <option>재생지 (Recycled paper)</option>
                </select>
                <input type="date" className="border p-2 rounded" />
                <input type="date" className="border p-2 rounded" />
                <button className="border px-4 py-2 rounded" onClick={searchButton}>검색</button>
            </div>

            <div className="bg-white">
                <img src={chartURL} alt="차트" className="w-300" />
            </div>
        </section>
    );
}

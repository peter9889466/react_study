import { useState } from "react";
import Button from "./Button";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import MixedChart from "./MixedChart"; // MixedChart 컴포넌트 임포트

export default function FilterChartSection() {
    const [item, setItem] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    // 초기 차트 유형을 "default"로 설정하여 페이지 로드 시 혼합 차트가 나오도록 함
    const [chartType, setChartType] = useState("default");

    // 📌 품목 변경
    const handleItemChange = (e) => setItem(e.target.value);

    // 📌 시작일 변경
    const handleStartChange = (e) => {
        const newStart = e.target.value;
        setStartDate(newStart);
        if (endDate && newStart > endDate) {
            setEndDate("");
        }
    };

    // 📌 종료일 변경
    const handleEndChange = (e) => {
        const newEnd = e.target.value;
        if (startDate && newEnd < startDate) {
            alert("종료일은 시작일보다 빠를 수 없습니다.");
            return;
        }
        setEndDate(newEnd);
    };

    // 📌 검색 버튼
    const searchButton = () => {
        if (!item || !startDate || !endDate) {
            alert("모든 값을 선택해 주세요.");
            return;
        }
        console.log({ item, startDate, endDate, chartType });
    };

    // 📌 초기화 버튼
    const handleReset = () => {
        setItem("");
        setStartDate("");
        setEndDate("");
        setChartType("default"); // 초기화 시 "default" (혼합 차트) 상태로 돌아오도록 설정
        console.log("입력값 초기화 완료");
    };

    return (
        <section className="p-4 bg-white flex flex-col flex-grow">
            <div className="flex flex-wrap gap-4 justify-start mb-4">
                <select className="border p-2 rounded" value={item} onChange={handleItemChange}>
                    <option value="">품목 토글</option>
                    <option>태양전지 모듈 (Solar cells)</option>
                    <option>풍력 발전기</option>
                    <option>인버터 (태양광용)</option>
                    <option>바이오가스 발생기</option>
                    <option>비직조 생분해성 원단</option>
                    <option>생분해성 플라스틱 포장재</option>
                    <option>바이오매스 연료 (목재펠릿 등)</option>
                    <option>재생지 (Recycled paper)</option>
                </select>

                <input type="date" className="border p-2 rounded" value={startDate} onChange={handleStartChange} />
                <input type="date" className="border p-2 rounded" value={endDate} onChange={handleEndChange} />

                <button className="border px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600" onClick={searchButton}>
                    검색
                </button>
            </div>

            {/* 그래프 타입 선택 버튼 */}
            <div className="flex gap-2 mb-6">
                <Button onClick={() => setChartType("bar")}>
                    막대그래프
                </Button>
                <Button onClick={() => setChartType("line")}>
                    꺾은선그래프
                </Button>
                <Button
                    onClick={() => setChartType("default")}> {/* Default 버튼을 누르면 "default" (혼합 차트) 상태로 변경 */}
                    Default
                </Button>
                <Button
                    onClick={handleReset}
                    className="bg-red-100 hover:bg-red-200 text-red-700"
                >
                    초기화
                </Button>
            </div>

            {/* 차트 영역 */}
            <div className="bg-white flex flex-col flex-grow">
                {/* 현재 차트 유형 표시 */}
                <p className=" text-gray-500">
                    현재 차트 유형:
                    {chartType === 'bar' ? ' 막대그래프' :
                        chartType === 'line' ? ' 꺾은선그래프' :
                            ' 혼합 차트 (막대 + 꺾은선)'}
                </p>
                <div className="flex-grow h-full w-full">
                    {chartType === "bar" && <BarChart />}
                    {chartType === "line" && <LineChart />}
                    {chartType === "default" && <MixedChart />}
                </div>
            </div>
        </section>
    );
}
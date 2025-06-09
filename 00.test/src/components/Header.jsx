// components/Header.jsx
export default function Header() {
    return (
        <header className="relative bg-blue-500 text-white flex items-center justify-between px-4 h-16">
            <button className="bg-blue-100 text-black font-bold px-4 py-1 rounded-full">로고</button>
            <h1 className="absolute left-1/2 transform -translate-x-1/2  text-2xl font-bold">제목</h1>
            
        </header>
    );
}

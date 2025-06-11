// components/ChatFooter.jsx
export default function ChatFooter() {
    return (
        <footer className="fixed bottom-4 right-4 w-[300px]">
            <div className="border rounded-xl shadow-md p-3 flex items-center gap-2">
                <input
                    type="text"
                    placeholder="무엇이든 물어보세요"
                    className="flex-1 outline-none"
                />
                <button className="text-black">🎤</button>
            </div>
        </footer>
    );
}
function Navbar() {
    return (
        <nav
            className="
                fixed bottom-4 left-1/2 -translate-x-1/2
                flex items-center gap-2
                px-3 py-2
                bg-white/80 backdrop-blur-md
                rounded-full shadow-lg
                border border-gray-200
                max-w-[95vw]
                overflow-x-auto
            "
        >
            <ToolbarButton label="✏️" text="Pencil" />
            <ToolbarButton label="🧽" text="Eraser" />
            <ToolbarButton label="🔤" text="Text" />
            <ToolbarButton label="🗑️" text="Clear" danger />
        </nav>
    );
}

function ToolbarButton({ label, text, danger }) {
    return (
        <button
            className={`
                flex items-center gap-2
                px-4 py-2
                rounded-full
                text-sm font-medium
                transition-all
                whitespace-nowrap
                ${
                    danger
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }
                active:scale-95
            `}
        >
            <span className="text-base">{label}</span>
            <span className="hidden sm:inline">{text}</span>
        </button>
    );
}

export default Navbar;

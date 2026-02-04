function Navbar({activetool,setActiveTool,}) {
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
            <ToolbarButton onClick={()=>setActiveTool('pencil')} activetool={activetool==='pencil'}  label="✏️" text="Pencil" />
            <ToolbarButton onClick={()=>setActiveTool('eraser')} activetool={activetool==='eraser'} label="🧽" text="Eraser" />
            <ToolbarButton onClick={()=>setActiveTool('text')} activetool={activetool==='text'} label="🔤" text="Text" />
            <ToolbarButton onClick={()=>setActiveTool('clear')} activetool={activetool==='clear'} label="🗑️" text="Clear" danger />
        </nav>
    );
}

function ToolbarButton({ label, text, danger, onClick,activetool }) {
    return (
        <button onClick={onClick} activetool={'activetool'}
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

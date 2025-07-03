export function WiiButton({ children, onClick, className = '', rounded = false }) {
    const bgImage = rounded
        ? "bg-[url('/assets/WiiButtonRounded.svg')]"
        : "bg-[url('/assets/WiiButton.svg')]";

    return (
        <button
            onClick={onClick}
            className={`cursor-pointer w-[32rem] h-20 ${bgImage} bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center select-none text-2xl text-gray-800 ${className}`}
        >
            <span className="text-center leading-snug">{children}</span>
        </button>
    );
}

export function WiiButtonMultiSelection({ children, onClick, className = '', selected = false, rounded = false }) {
    const bgImage = rounded
        ? "bg-[url('/assets/WiiButtonRounded.svg')]"
        : "bg-[url('/assets/WiiButton.svg')]";

    return (
        <div className="relative w-[32rem] h-24">
            {selected && (
                <div className="absolute inset-0 WiiButtonSelected z-10 pointer-events-none" />
            )}
            <button
                onClick={onClick}
                className={`cursor-pointer w-full h-full ${bgImage} bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center select-none text-2xl text-gray-800 z-20 ${className}`}
                aria-pressed={selected}
            >
                <span className="text-center leading-snug">{children}</span>
            </button>
        </div>
    );
}
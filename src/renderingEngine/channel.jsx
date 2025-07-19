import "./css/channel.css";
import "./css/animations.css";

export function WiiChannel({ key, icon, name, hoverFX = false, mode = "widescreen" }) {
    // Choose aspect ratio class based on mode
    // 16/9 = widescreen, 4/3 = standard
    const aspectClass = mode === "standard" ? "aspect-[4/3] channel-scale-standard" : "aspect-[16/9] channel-scale-widescreen";

    return (
        <div className="relative flex flex-col items-center group">
            <div
                className={`h-40 mr-24 relative bg-white border-[#ccc] border-4 rounded-2xl shadow-md transition-colors ${aspectClass} ${
                    hoverFX ? "group-hover:border-blue-400 cursor-pointer" : "border-[#ccc]"
                }`}
            >
                {icon && (
                    <img
                        src={icon}
                        alt={key}
                        className="absolute inset-0 w-full h-full object-contain p-4 pointer-events-none spin3d"
                    />
                )}
            </div>

            {name && (
                <div className="absolute top-full text-center bg-[#f0f0f0] rounded-full text-xl w-[192px] text-[#444] shadow-sm z-10 chnHoverName">
                    {name}
                </div>
            )}
        </div>
    );
}

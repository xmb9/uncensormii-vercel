export function WiiMenuFooter({ children }) {
    return (
        <footer
            className="flex items-center justify-between basis-[20%] px-12 bg-gradient-to-t from-[#e1e2e6] to-[#f6f6f6] border-t-6 border-[#34beed] relative"
            style={{ boxShadow: "0 -2px 16px 0 #b3e3fa33" }}
        >
            {children}
        </footer>
    );
}
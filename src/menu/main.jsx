export function Menu() {
    const handleClick = () => {
        localStorage.oobeCompleted = 'false';
        window.location.reload();
    };

    return (
        <>
            <h1>we're successfully showing the main menu, press the button below to reload and go to the setup</h1>
            <button onClick={handleClick}>
                Complete Setup
            </button>
        </>
    );
}
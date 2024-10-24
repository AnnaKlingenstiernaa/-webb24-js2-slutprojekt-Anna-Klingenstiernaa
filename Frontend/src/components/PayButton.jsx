export function PayButton({ onPay }) {
    const handleClick = () => {
        onPay(); 
    };

    return (
        <button className="pay-button" onClick={handleClick}>Betala</button>
    );
}

export function PayButton({ onPay }) {
    const handleClick = () => {
        console.log("Betala-knappen klickad");
        onPay();
    };

    return (
        <button className="pay-button" onClick={handleClick}>Betala</button>
    );
}

const Ticket = ({ movie, selectedShowtime, selectedSeats }) => {
    // Calcular el total (precio de cada asiento = 10000)
    const total = selectedSeats.length * 10000;

    return (
        <div className="mt-6 bg-primary-extraLight p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">Detalles del Ticket</h2>
            <p><strong>Película:</strong> {movie.title}</p>
            <p><strong>Función:</strong> {selectedShowtime.showTime} en {selectedShowtime.roomId}</p>
            {/* <p><strong>Fecha:</strong> {selectedShowtime.showDate}</p> */}
            <p><strong>Asientos:</strong></p>
            <ul>
                {selectedSeats.map(seat => (
                    <li key={seat.id}>{seat.name}</li>
                ))}
            </ul>
            <p><strong>Total:</strong> {total.toLocaleString()} COP</p> {/* Formateo el total con separadores de miles */}
        </div>
    );
};

export default Ticket;

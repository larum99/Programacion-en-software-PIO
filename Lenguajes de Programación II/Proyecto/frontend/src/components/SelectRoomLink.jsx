import Link from 'next/link';

const SelectRoomLink = ({ id }) => (
    <div className="mt-8 text-center">
        <Link href={`/select-room/${id}`} className="text-2xl font-bold text-center text-secondary-dark hover:text-secondary">
            Seleccionar Sala
        </Link>
    </div>
);

export default SelectRoomLink;

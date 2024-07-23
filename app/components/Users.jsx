import Link from "next/link";

export default function User({ user }) {
    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
            <Link href={`/users/${user.id}`}>
                <div className="text-center">
                    <h3 className="text-lg font-bold">{user.id}</h3>
                    <p className="text-gray-600">Nombre: {user.first_name}</p>
                    <p className="text-gray-600">Apellido: {user.last_name}</p>
                    <p className="text-gray-600">Email: {user.email}</p>
                    <img
                        className="rounded-full w-30 h-30 m-auto mb-4"
                        src={user.avatar}
                        alt=""
                    />
                </div>
            </Link>
        </div>
    );
}
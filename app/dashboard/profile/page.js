import Image from "next/image";

export default function Profile () {
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 md:px-12 lg:py-16 bg-gray-50">
            <div className="w-full md:w-[350px] flex flex-col gap-4 shadow-md rounded-md">
                <div className="flex justify-center">
                    <Image
                    width={80}
                    height={80}
                    src="/bg.imghs.jpg"
                    alt="profile-image"
                    className="w-[80px] h-[80] rounded-full"/>
                </div>
                <p className="text-center py-3 border-b border-gray-600">OLA</p>
                <p className="text-center py-3 border-b border-gray-600">adamhammed550@gmail.com</p>
                <p className="text-center py-3 border-b border-gray-600">User ID</p>
            </div>

        </main>
    )
}
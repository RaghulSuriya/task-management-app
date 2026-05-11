function Profile() {

    return (

        <div className="min-h-screen bg-[#071028] text-white p-10">

            <div className="bg-[#0B1736] border border-[#1B2A52] rounded-3xl p-10 max-w-2xl">

                <h1 className="text-5xl font-bold mb-8">
                    Profile
                </h1>

                <div className="space-y-6">

                    <div>
                        <p className="text-gray-400 mb-2">
                            Username
                        </p>

                        <h2 className="text-2xl font-bold">
                            srs472006
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-400 mb-2">
                            Email
                        </p>

                        <h2 className="text-2xl font-bold">
                            srs472006@gmail.com
                        </h2>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default Profile;
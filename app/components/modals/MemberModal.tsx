"use client";

type Member = {
    id: number;
    name: string;
    role: string;
    email: string;
    avatar: string;
};

type MemberModalProps = {
    member: Member;
    onClose: () => void;
};


export default function MemberModal({ member, onClose }: MemberModalProps) {



    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl w-full max-w-lg px-6 py-5 relative drop-shadow-xl border border-gray-300">

                {/* Modal content vai aqui */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4  rounded-full px-2 text-gray-500 hover:text-blue-400 hover:scale-110
                    active:scale-95 active:text-blue-950
                    "

                >
                    <p className="text-2xl font-bold">✕</p>
                </button>

                {/* Avatar IMG */}
                <img src={member.avatar}
                    alt="membro"
                    className="mt-8 w-32 h-32 rounded-full border-2 border-blue-500 mx-auto drop-shadow-sm drop-shadow-blue-500/70"
                />

                {/* Name and Role */}
                <h2 className="text-2xl font-bold text-center mt-2 drop-shadow-lg drop-shadow-blue-500/50 ">{member.name}</h2>
                <div className="flex justify-center p-2 gap-5 mt-2">
                    <div className="px-3 py-1 w-28 text-center block font-bold bg-linear-to-r from-blue-400 to-blue-600 drop-shadow-lg drop-shadow-blue-500/50 border border-gray-400 text-white rounded-full">{member.role}</div>
                    
                    <p className="px-3 py-1 w-28 text-center block font-bold bg-linear-to-r from-emerald-400 to-emerald-600 drop-shadow-lg drop-shadow-green-500/50 border border-gray-400 text-white rounded-full">Working</p>
                </div>

                {/* Email */}
                <p className="text-center text-gray-600 ">{member.email}  </p>

                {/* =================== CSS Style Line ===============
                <div className="mt-4 flex items-center justify-start gap-4 drop-shadow-lg">
                    <p className="font-semibold text-[18px]">Work Status</p>
                    <div className="w-[70%] h-1 bg-linear-to-r from-blue-800 to-blue-50 font-sm rounded-full"></div>
                </div>*/}

                {/* Work Status */}
                

                {/* About */}
                <div className=" p-4">
                    <div className="p-4 bg-linear-to-r from-cyan-50/50 to-blue-100 font-sm border border-black/20 drop-shadow-lg rounded-3xl">
                        <h3 className="font-bold text-lg">About</h3>
                        <p>{member.name} has been using Team Force for 143 days.</p>
                    </div>
                </div>

                {/* =================== CSS Style Line ===============
                <div className=" flex items-center justify-start gap-4">
                    <p className="font-semibold text-[18px] drop-shadow-lg">Contact</p>
                    <div className="ml-6 w-[70%] h-1 bg-linear-to-r from-blue-800 to-blue-50 font-sm rounded-full"></div>
                </div>*/}

                {/* Contact */}
                <div className="mt-2 flex justify-center gap-4">
                    <button className="text-blue-500">Linkedin</button>
                    <button className="text-blue-500">GitHub</button>
                    <button className="text-blue-500">Email</button>
                </div>

                <div className="flex justify-center p-4">
                    <button className="mt-4 w-full max-w-[70%] h-12.5 bg-blue-500 text-white py-2 rounded-full
              bg-linear-to-r from-blue-400 to-blue-600
              hover:bg-linear-to-r hover:from-blue-500 hover:to-blue-700
              hover:scale-103
              drop-shadow-lg drop-shadow-indigo-500/50"
                    >Send Email
                    </button>
                </div>


            </div>
        </div>

    )
}
"use client";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type Member = {
    id: number;
    name: string;
    role: string;
    email: string;
    avatar: string;
    status: "online" | "offline";
    workStart: string; // Example: "09:00"
    workEnd: string;   // Example: "17:00"
    country: string;
    location: string;
    gender: string;
};


type MemberModalProps = {
    member: Member;
    onClose: () => void;
};



export default function MemberModal({ member, onClose }: MemberModalProps) {

    {/* ===== press esc to close modal and removeEventListener */}
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);


    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4"
            onClick={onClose}>

            <div className="bg-white rounded-xl w-full max-w-lg px-6 py-5 relative drop-shadow-xl border border-gray-300"
                onClick={(e) => e.stopPropagation()}>

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
                    className="relative mt-4 w-36 h-36 rounded-full mx-auto 
                      drop-shadow-lg
                    border-2 border-white"
                />

                {/* Name and Role */}
                <h2 className="text-3xl font-bold text-center drop-shadow-lg my-5">{member.name}</h2>
                <div className="flex justify-between p-2 gap-5 mt-2">
                    <div className={`px-3 py-1 w-full text-center block font-bold text-[18px] border-2  rounded-full
                        ${member.role === "👑Team Lead" ? "bg-yellow-100 text-yellow-800" :
                                            member.role === "Developer" ? "bg-blue-100 text-blue-800" :
                                            member.role === "Marketing" ? "bg-cyan-100/50 text-cyan-800" :
                                            member.role === "Support" ? "bg-violet-100 text-violet-800" :
                                            "bg-blue-100 text-blue-700"
                                }
                        `}> {member.role}
                        </div>

                    <p className={`
                        px-3 py-1 w-28 text-center block font-bold text-[18px] border-2  rounded-full
                        ${member.status === "online"
                            ? "bg-green-100 border-green-500 text-green-900"
                            : "bg-red-100 border-red-500 text-red-900"
                        }
                        `}>

                        {member.status}</p>
                </div>


                {/* About */}
                <div className="flex justify-start ml-5">
                    <p className=" text-bold text-lg md:text-xl">
                        Works from <span className="font-semibold text-blue-600">{member.workStart}
                        </span> to <span className="font-semibold text-blue-600">{member.workEnd}</span>
                    </p>
                </div>

                <div className="my-6 px-4 text-sm md:text-base">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 
                    border border-blue-200 rounded-2xl shadow-sm">



                        <h3 className="font-bold text-base md:text-lg text-gray-900 flex items-center">
                            <span>About</span>
                        </h3>

                        <p >Gender: <span className="font-semibold text-gray-500 break-all">{member.gender}</span></p>
                        <p >Email: <span className="font-semibold text-gray-500 break-all">{member.email}</span></p>
                        <p >Location: <span className="font-semibold text-gray-500 break-all">{member.location}</span></p>

                    </div>
                </div>

                {/* Contact with npm install react-icons */}
                <div className="mt-2 flex justify-center gap-6 ">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-900 hover:scale-125 transition">
                        <FaGithub size={32} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 hover:scale-125 transition">
                        <FaLinkedin size={32} />
                    </a>
                    <a href={`mailto:${member.email}`}
                        className="text-blue-500 hover:text-blue-700 hover:scale-125 transition">
                        <FaEnvelope size={32} />
                    </a>
                </div>

                <div className="flex justify-center gap-3 p-4 mt-5">
                    <button className="flex-1 bg-blue-500 text-white py-2.5 rounded-full
                    hover:bg-blue-600 active:scale-95
                    font-semibold transition drop-shadow-md
                    flex items-center justify-center gap-2">
                        Send Email
                    </button>

                </div>


            </div>
        </div>

    )
}
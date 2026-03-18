import MemberRow from "./MemberRow";

export default function MemberList({ members, selectedMemberId, onMemberClick }) {

    return (

        <section className="w-full mt-8 px-5">
            {/* ================== Mobile layout ===================== */}
            <div className="flex flex-col gap-4 md:hidden">
                {members.map((member) => (
                    <MemberRow
                        key={member.id}
                        member={member}
                        isSelected={member.id === selectedMemberId}
                        onClick={() => onMemberClick?.(member)}
                    />
                ))}
            </div>

            {/* =================== Desktop layout =============== */}
            <div className="hidden md:block max-w-[70%] mx-auto">

                {/* Table container */}
                <div className="rounded-4xl shadow-lg mb-10"
                >

                    {/* Header */}
                    <div className="grid grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr] px-6 py-4 text-xs font-semibold text-gray-500 uppercase border border-gray-300 rounded-full">
                        <div>Avatar</div>
                        <div>Name</div>
                        <div>Role</div>
                        <div>Email</div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-gray-200 divide-rounded">
                        {members.map((member) => {
                            const isSelected = member.id === selectedMemberId;

                            return (
                                <div key={member.id} className="px-0.5">
                                    {/* SAFE AREA */}

                                    <div
                                        onClick={() => onMemberClick?.(member)}
                                        className={`grid grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr] 
                                                    items-center justify-items-start px-6 py-3 cursor-pointer transition rounded-full
                                                ${isSelected
                                                ? "bg-blue-200 ring-2 ring-blue-500"
                                                : "hover:bg-blue-50"
                                            }
                                                `}
                                    >
                                        {/* Avatar */}
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />

                                        {/* Name + Status */}
                                        <div className="grid grid-cols-[10px_1fr] items-center justify-items-start gap-3" >

                                            <span className={`
                                            h-2.5 w-2.5 rounded-full
                                            ${member.status === "online" ? "bg-green-500" : "bg-red-500"}
                                            `}
                                            />


                                            <p className="font-medium text-gray-900">
                                                {member.name}
                                            </p>

                                        </div>

                                        {/* Role */}
                                        <span className={`text-xs font-medium text-nowrap px-3 py-1 rounded-full
                                        ${member.role === "👑Team Lead" ? "bg-yellow-100 text-yellow-800" :
                                                        member.role === "Developer" ? "bg-blue-100 text-blue-800" :
                                                        member.role === "Marketing" ? "bg-cyan-100/50 text-cyan-800" :
                                                        member.role === "Support" ? "bg-violet-100 text-violet-800" :
                                                        "bg-blue-100 text-blue-700"
                                            }
                                        `}>
                                            {member.role}
                                        </span>

                                        {/* Email */}
                                        <span className="text-xs text-gray-500 break-all">{member.email}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>

        </section>
    );
}

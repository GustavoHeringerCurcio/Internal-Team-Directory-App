import MemberRow from "./MemberRow";

type Member = {
    id: number;
    name: string;
    role: string;
    email: string;
    avatar: string;
};

type MemberListProps = {
    members: Member[];
    selectedMemberId?: number;
    onMemberClick?: (member: Member) => void;
};


export default function MemberList({ members, selectedMemberId, onMemberClick, }: MemberListProps) {

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
            <div className="hidden md:block max-w-[73%] mx-auto">

                {/* Table container */}
                <div className="rounded-2xl shadow-sm overflow-hidden"
                >

                    {/* Header */}
                    <div className="grid grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr] px-6 py-4 text-xs font-semibold text-gray-500 uppercase border border-gray-200">
                        <div>Avatar</div>
                        <div>Name</div>
                        <div>Role</div>
                        <div>Email</div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-gray-200">
                        {members.map((member) => {
                            const isSelected = member.id === selectedMemberId;

                            return (
                                <div key={member.id} className="px-0.5">
                                    {/* SAFE AREA */}

                                    <div
                                        onClick={() => onMemberClick?.(member)}
                                        className={`grid grid-cols-[1.5fr_1.5fr_1.5fr_1.5fr]
                                                    items-center px-6 py-3 cursor-pointer transition rounded-lg
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

                                        {/* Name */}
                                        <p className="font-medium text-gray-900">
                                            {member.name}
                                        </p>

                                        {/* Role */}
                                        <span className="w-fit text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                                            {member.role}
                                        </span>

                                        {/* Email */}
                                        <p className="text-sm text-gray-600">
                                            {member.email}
                                        </p>
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
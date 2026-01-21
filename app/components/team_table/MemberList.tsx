import MemberRow from "./MemberRow";

type Member = {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
  status: "online" | "offline";
  workStart: string; // Exemplo: "09:00"
  workEnd: string;   // Exemplo: "17:00"
  country: string;
  location: string;
  gender: string;
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
            <div className="hidden md:block max-w-[70%] mx-auto">

                {/* Table container */}
                <div className="rounded-4xl shadow-lg"
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
                                        <span className=" text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
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
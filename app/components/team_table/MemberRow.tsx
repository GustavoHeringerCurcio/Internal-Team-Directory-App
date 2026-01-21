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

type MemberRowProps = {
    member: Member;
    isSelected?: boolean;
    onClick?: () => void; // <- isso permite receber a função
};

export default function MemberRow({ member, isSelected, onClick }: MemberRowProps) {
    return (
        <>
            <div
                onClick={onClick}
                className={`
                    relative w-full rounded-xl p-4 cursor-pointer transition
                     shadow-[0_6px_16px_rgba(0,0,0,0.08)]

                    ${isSelected
                        ? "border-2 border-blue-500 bg-blue-100"
                        : "border-2 border-transparent bg-white"
                    }
                `}
            >

                {/* Action menu */}
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                    aria-label="Member actions"
                >
                    •••
                </button>

                <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <img
                        src={member.avatar}
                        srcSet={`${member.avatar} 2x`}
                        alt={member.name}
                        className="w-14 h-14 rounded-full object-cover shrink-0"
                    />

                    {/* Info */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className={`
                            h-2.5 w-2.5 rounded-full
                            ${member.status === "online" ? "bg-green-500" : "bg-red-500"}
                            `}
                            />
                            <p className="text-base font-semibold text-gray-900 leading-tight">
                                {member.name}
                            </p>
                        </div>

                        <span className="text-xs font-medium text-blue-700 bg-blue-100 w-fit px-2 py-0.5 rounded-full">
                            {member.role}
                        </span>

                        <p className="text-sm text-gray-500 break-all">
                            {member.email}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
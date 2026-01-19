type Member = {
  id: number;
  name: string;
  role: string;
  email: string;
  avatar: string;
};

type MemberRowProps = {
  member: Member;
};

export default function MemberRow({ member }: MemberRowProps) {
    return (
        <>
            <div className="relative w-full bg-white rounded-xl p-4 shadow-[0_6px_16px_rgba(0,0,0,0.08)]">

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
                        alt={member.name}
                        className="w-14 h-14 rounded-full object-cover shrink-0"
                    />

                    {/* Info */}
                    <div className="flex flex-col gap-1">
                        <p className="text-base font-semibold text-gray-900 leading-tight">
                            {member.name}
                        </p>

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
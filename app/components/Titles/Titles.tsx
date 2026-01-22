type TitleProps = {
    visible: boolean;
}

export default function Titles({ visible }: TitleProps) {

    //if (!visible) return null;



    return (
        <section
            className={`
        ml-5 flex flex-col
        ${visible ? "" : "hidden md:flex"}
      `}
        >
            <h1 className="font-bold text-2xl md:text-5xl">Team Members</h1>
            <p className="text-base md:text-2xl font-light text-gray-500">
                Manage your organization members
            </p>
        </section>
    );
}
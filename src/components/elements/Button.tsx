export default function Button({
    children,
    className,
}: {
    children: string | React.ReactNode;
    className?: string;
}) {
    return (
        <button
            className={`px-6 py-2.5 rounded-full text-xs leading-normal font-bold uppercase text-white bg-orange hover:bg-darkorange duration-300 ${className}`}
        >
            {children}
        </button>
    );
}

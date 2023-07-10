export default function Switch({ checked }: { checked?: boolean }) {
    return (
        <label className="switch">
            <input type="checkbox" checked={checked} />
            <span className="slider round" />
        </label>
    );
}

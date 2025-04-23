export default function SeparatorWithText() {
    return (
        <div className="w-full flex items-center gap-2">
            <hr className="w-full border-t border-primary"/>
            <span className="text-primary">or</span>
            <hr className="w-full border-t border-primary"/>
        </div>
    );
}
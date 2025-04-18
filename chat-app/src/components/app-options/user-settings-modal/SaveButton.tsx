import {Button} from "@/components/ui/button.tsx";

export default function SaveButton({setUsername, usernameContentRef}: {setUsername: React.Dispatch<React.SetStateAction<string>>, usernameContentRef: React.MutableRefObject<string>}) {
    function handleSave() {
        setUsername(usernameContentRef.current);
    }

    return (
        <Button type="button" onClick={handleSave}>Save changes</Button>
    );
}
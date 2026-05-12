import { Input } from "@/components/base/input/input";
//import type { Placeholder } from "@untitledui/icons";
 

export const DefaultInput = () => {
    return (<>
        <Input placeholder = "Email" className="!mb-10"/> {/*this input tag is a custom one btw */}
        <Input placeholder = "Password" />
        <Input placeholder = "Confirm Password" />
        <input placeholder="Chudmaxxed"/>
    </>)
}

// REPAIR LATER
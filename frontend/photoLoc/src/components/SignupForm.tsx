import { SocialButtonGroupBrandDemo } from "./SocialButtonGroupBrand"
import { DefaultInput } from "./DefaultInput"

export const SignupForm = () => {

    return(
        <div id="signupform" className="grid gap-4 w-[400px] p-8 bg-white rounded-lg shadow-md mx-auto">
            
            <DefaultInput/>
            <SocialButtonGroupBrandDemo/>
        </div>
    )

}

export default SignupForm;
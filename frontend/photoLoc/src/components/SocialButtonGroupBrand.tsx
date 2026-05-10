import { SocialButton } from "./base/buttons/social-button";
 
export const SocialButtonGroupBrandDemo = () => {
    return (
        <div className="flex w-90 flex-col gap-3">
            <SocialButton social="google" theme="brand">
                Sign in with Google
            </SocialButton>
            <SocialButton social="facebook" theme="brand">
                Sign in with Facebook
            </SocialButton>
            <SocialButton social="apple" theme="brand">
                Sign in with Apple
            </SocialButton>
        </div>
    );
};


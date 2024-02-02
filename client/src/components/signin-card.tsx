import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GithubSigninButton, GoogleSigninButton } from "./auth-buttons";

const SigninCard = async () => {
  return (
    <Dialog>
      <DialogTrigger className="hover:opacity-80">Sign in</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Social Login</DialogTitle>
          <DialogDescription>
            Quickly sign in with your social network
          </DialogDescription>
        </DialogHeader>
        <div className="w-full grid grid-cols-12 gap-3">
          <GoogleSigninButton />
          <GithubSigninButton />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SigninCard;

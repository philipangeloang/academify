import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { SignoutButton } from "./auth-buttons";

const SignoutCard = () => {
  return (
    <Dialog>
      <DialogTrigger className="hover:opacity-80">Sign out</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you leaving?</DialogTitle>
          <DialogDescription>
            Are you sure you want to log out?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <SignoutButton />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignoutCard;

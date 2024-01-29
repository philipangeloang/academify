"use client";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const GoogleSigninButton = () => {
  return (
    <Button
      variant="black"
      className="col-span-6"
      onClick={() => {
        signIn("google");
      }}
    >
      <FcGoogle />
    </Button>
  );
};

export const GithubSigninButton = () => {
  return (
    <Button
      variant="black"
      className="col-span-6"
      onClick={() => {
        signIn("github");
      }}
    >
      <FaGithub />
    </Button>
  );
};

export const SignoutButton = () => {
  return (
    <Button
      variant="black"
      onClick={() => {
        signOut();
      }}
    >
      Continue
    </Button>
  );
};

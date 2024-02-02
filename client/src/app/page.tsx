import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query getUser($userId: ID!) {
    user(id: $userId) {
      name
      email
    }
  }
`;

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="max-w-7xl mx-auto p-5 flex flex-col justify-center items-center">
      <h1 className="font-black text-black text-6xl pt-20 text-center leading-[1.1] max-w-2xl">
        Your Best of Friend in <br />
        <span className=" text-blue-600">Academics</span>
      </h1>
      <p className="max-w-xl text-center pt-5 pb-10">
        Revolutionize your college experience with Academify. Effortlessly
        manage assignments, boost productivity, and conquer deadlines. Elevate
        your academic game and thrive in style.
      </p>
      <Button variant="blue">Documentation</Button>
    </main>
  );
}

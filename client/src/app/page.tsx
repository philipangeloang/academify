import { Button } from "@/components/ui/button";

export default function Home() {
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
      <Button variant="blue">Get Started</Button>
    </main>
  );
}

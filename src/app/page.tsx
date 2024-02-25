import { AppLogo } from "@/components/app-logo";

export default function Home() {
  return (
    <div className="h-dvh w-full grid place-items-center place-content-center gap-4">
      <AppLogo width={200} />
      <div className="text-7xl font-black text-lime-500">Din</div>
    </div>
  );
}

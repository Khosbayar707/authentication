import { Input } from "@/components/ui/input";

export default function Register() {
  return (
    <form className="mx-auto mt-[250px] w-[40%] h-[40%] border-1 rounded-xl shadow-xl p-6 space-y-4">
      <h2 className="text-center">Бүртгүүлэх</h2>
      <div>
        <p className="text-sm">И-мэйл хаягаа оруулна уу.</p>
        <Input type="email" placeholder="Email" />
      </div>
      <div>
        <p className="text-sm">Нууц үгээ оруулна уу.</p>
        <Input type="password" placeholder="Password" />
      </div>
    </form>
  );
}

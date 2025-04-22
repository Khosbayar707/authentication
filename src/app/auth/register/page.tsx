import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <form className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 transform transition-all hover:shadow-3xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Бүртгүүлэх
        </h2>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">
            И-мэйл хаягаа оруулна уу.
          </label>
          <Input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Нууц үгээ оруулна уу.
          </label>
          <Input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
        >
          Бүртгүүлэх
        </Button>

        <p className="text-center text-sm text-gray-500">
          Бүртгэлтэй хэрэглэгч?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Нэвтрэх
          </a>
        </p>
      </form>
    </div>
  );
}

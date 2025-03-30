import { useState } from 'react';

function SignIn() {
  const [form, setForm] = useState({
    id: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.id || !form.password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    // TODO: POST signIn API
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">로그인</h2>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={form.id}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <button
          type="submit"
          className="w-full bg-lime-400 text-white p-2 rounded hover:bg-lime-500 transition-colors duration-700"
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default SignIn;

import { useState } from 'react';

function SignUp() {
  const [form, setForm] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
    gender: '',
  });

  const genders = ['남자', '여자', '미공개'];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenderSelect = (selectedGender) => {
    setForm({
      ...form,
      gender: selectedGender,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.password || !form.confirmPassword || !form.email || !form.gender) {
      alert('모든 정보를 입력해주세요.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">회원가입</h2>
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />
        <div className="flex justify-between mb-4">
          {genders.map((gender) => (
            <button
              type="button"
              key={gender}
              onClick={() => handleGenderSelect(gender)}
              className={`p-2 w-1/3 rounded border transition-colors duration-700 ${
                form.gender === gender ? "bg-lime-400 text-white" : "bg-white"
              }`}
            >
              {gender}
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-lime-400 text-white p-2 rounded hover:bg-lime-500 transition-colors duration-700"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUp;

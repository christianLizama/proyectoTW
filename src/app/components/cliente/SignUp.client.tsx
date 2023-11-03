'use client'
import React, { useRef, FormEvent } from 'react';

const SignupClient: React.FC = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log('Registration Data:', { firstName, lastName, email, password });
    // Aquí manejarías el envío del formulario, como enviar los datos a un servidor
  };

  return (
    <form className="px-7 h-screen grid justify-center items-center" onSubmit={handleSubmit}>
      <div className="grid gap-6" id="form">
        <div className="w-full flex gap-3">
          <input
            ref={firstNameRef}
            className="capitalize shadow-xl p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            placeholder="First Name"
            id="First-Name"
            name="First-Name"
            required
          />
          <input
            ref={lastNameRef}
            className="p-3 capitalize shadow-xl w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            placeholder="Last Name"
            id="Last-Name"
            name="Last-Name"
          />
        </div>
        <div className="grid gap-6 w-full">
          <input
            ref={emailRef}
            className="p-3 shadow-xl w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="email"
            placeholder="Email"
            id="Email"
            name="email"
          />
          <input
            className="p-3 shadow-xl w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="date"
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            ref={passwordRef}
            className="p-3 w-full rounded-md shadow-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
          />
          <input
            ref={confirmPasswordRef}
            className="p-3 w-full rounded-md shadow-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button
          className="w-full p-3 rounded-md bg-blue-100 text-blue-700 font-bold shadow-xl hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignupClient;

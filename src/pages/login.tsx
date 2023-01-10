import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { history } from "umi";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status !== 200) {
        console.error(await res.text());
        return;
      }
      const data = await res.json();
      alert(`欢迎回来，${data.name}`);
      history.push("/posts/create");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    // <div className="w-full flex justify-center">
    //   <div className="container lg:px-64 px-8 pt-16">
    //     <p className="text-3xl font-extrabold">用户登入</p>
    //     <div className="mt-8">
    //       <p>邮箱</p>
    //       <TextInput value={email} onChange={setEmail} />
    //       <p className="mt-4">密码</p>
    //       <TextInput value={password} onChange={setPassword} />
    //       <Button onClick={submit}>登入</Button>
    //     </div>
    //   </div>
    // </div>
    <div className="hero h-[calc(100vh-8rem)] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">用户登录</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={submit}>
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

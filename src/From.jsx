import React, { useState } from "react";

const SubmitForms = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [channel, setchanel] = useState();
  const [password, setPassword] = useState();

  const [allEntry, setAllEntry] = useState([]); //array state akhane user ki data dichchea ta store kore rakhsi

  const submitForm = (event) => {
    event.preventDefault(); //console a component ar auto refresh off korar jonno ata

    // akhane if else dara bolsi jodi client username email password ar shob field poron kore tahole submit korte parbe na ho hole alert dekhabe....
    if ((username, email && password)) {
      const newEntry = {
        id: new Date().getTime().toString(),
        username: username,
        email: email,
        password: password,
      };
      setAllEntry([...allEntry, newEntry]); //previous shob data pabar jonno spreed oprator use korsi !!allentry te previous shob data.

      //ay part toko form submit korar por jate field empty hoye jai jonno start
      setUsername("");
      setEmail("");
      setPassword("");
      setchanel("");
      //ay part toko form submit korar por jate field empty hoye jai jonno ends
    } else {
      alert("Please fill all the fields");
    }
  };
  
  return (
    <>
      <div className="flex justify-center align-center bg-slate-400 w-screen h-screen mt-56">
        <form
          onSubmit={submitForm}
          className="flex flex-col justify-center align-center w-[496px] h-96 mt-36 bg-white border-none"
        >
          <div className="text-center text-base font-bold">
            <h1>Login form</h1>
          </div>
          <div className="pl-9 pr-8">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)} //event object ta ay input ar jei value otake target kortese ..ay field ja likhbe ota setUsername a store korbe
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="channel"
                className="block text-gray-700 font-medium mb-2"
              >
                Channel
              </label>
              <input
                type="text"
                name="channel"
                id="channel"
                value={channel}
                onChange={(event) => setchanel(event.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md  hover:bg-indigo-600 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubmitForms;

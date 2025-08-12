import React from "react";
function About() {
  return (
    <div className="flex flex-col items-center justify-center text-center my-5 min-h-[60vh] p-2">
      <header className="header my-5">
        <h1 className="text-5xl font-bold">About <span className="text-purple-700">Bitlinks</span></h1>
      </header>
      <main className="content my-5 font-semibold">
        <p>At <span className="text-purple-700">Bitlinks</span>, we respect your <span className="text-purple-700">privacy</span> and value your <span className="text-purple-700">time</span>.</p>
        <p>No need to sign up. You can use Bitlinks for free. Just add your long URL and get a short link.</p>
      </main>
      <footer className="footer my-5 font-semibold">
        <p>Get in Touch: <a href="mailto:mandalpritam8617@gmail.com" className="text-purple-700 hover:underline">mandalpritam8617@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default About;
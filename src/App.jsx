import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/Sign-in/SignIn';
import SignUp from './components/Sign-up/SignUp';
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

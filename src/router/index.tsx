import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import('../containers/HomePage'));
const AuthLogin = React.lazy(() => import('../containers/Auth/Login'));
const JobDetail = React.lazy(() => import('../containers/Job/JobDetails'));

export default function AppRouter() {
  const googleClientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  console.log('googleClientID', googleClientID)

  return(
    <GoogleOAuthProvider clientId={String(googleClientID)}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={
              <React.Suspense fallback={<>Loading...</>}>
                <HomePage />
              </React.Suspense>
            } />
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<>Loading...</>}>
                  <AuthLogin />
                </React.Suspense>
              }
            />
            <Route
              path="job/*"
              element={
                <React.Suspense fallback={<>Loading...</>}>
                  <JobDetail />
                </React.Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </GoogleOAuthProvider>
  );
}
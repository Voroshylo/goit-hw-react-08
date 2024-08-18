import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchContacts } from "./redux/contacts/operations";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout/Layout";
// import HomePage from "./pages/HomePage/";
// import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<LoginPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

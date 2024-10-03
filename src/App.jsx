import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AddJob,
  EditJob,
  JobDetail,
  JobList,
  Login,
  NotFound,
  Register,
} from "../pages";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/addJob" element={<AddJob />} />
        <Route path="/editJob" element={<EditJob />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/list" element={<JobList />}>
          <Route index element={<JobList />} />
          <Route path=":id" element={<JobDetail />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

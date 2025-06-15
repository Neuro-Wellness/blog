import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
    );
}

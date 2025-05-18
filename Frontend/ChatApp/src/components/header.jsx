"use client"

// import { useAuth } from "@/contexts/auth-context"
import { useState } from "react"

export default function Header() {
  const user = { username: 'user' };
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)
  const closeDropdown = () => setDropdownOpen(false)

  return (
   <header className="px-4 py-3 shadow bg-white">
  <div className="d-flex justify-content-between align-items-center w-100">
    <div className="d-flex align-items-center">
      <h1 className="h5 fw-bold text-primary">ChatApp</h1>
    </div>

    <div className="d-flex align-items-center gap-2 position-relative">
      <button className="btn btn-light rounded-circle p-2">
        <i className="bi bi-bell text-secondary"></i>
      </button>

      <div className="position-relative">
        <button
          onClick={toggleDropdown}
          className="d-flex align-items-center gap-2 btn btn-light px-2 py-1 rounded"
        >
          <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white" style={{ width: "32px", height: "32px" }}>
            {user?.username?.charAt(0).toUpperCase() || "U"}
          </div>
          <span className="fw-medium">Menu</span>
          <i className="bi bi-chevron-down text-secondary"></i>
        </button>

        {isDropdownOpen && (
          <div className="position-absolute end-0 mt-2 bg-white rounded shadow-sm py-1 z-3" style={{ width: "12rem" }}>
            <button
              onClick={() => {
                closeDropdown();
                logout();
              }}
              className="dropdown-item text-sm text-dark"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
</header>

  )
}

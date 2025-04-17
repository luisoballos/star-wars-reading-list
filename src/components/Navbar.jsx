import { Link } from "react-router-dom"
import { Favorites } from "../pages/Favorites"

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">Star Wars</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						{/* Left */}
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Description</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Contact list</a>
							</li>
						</ul>

						{/* Right */}
						<form className="d-flex me-3">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-dark" type="submit">Search</button>
						</form>
					</div>
				</div>
			</nav>
			<div className="d-flex justify-content-between align-items-center mx-3 mt-3">
				<div>
					<Link to="/">
						<button className="btn btn-outline-light">Back home</button>
					</Link>
				</div>
				<div className="dropdown">
					<button
						className="btn btn-outline-warning dropdown-toggle"
						type="button"
						id="favoritesDropdown"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Favorites
					</button>
					<Favorites />
				</div>
			</div>
		</>
	)
}
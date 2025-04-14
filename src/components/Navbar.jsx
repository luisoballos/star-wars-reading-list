import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
		<>
			<div className="collapse" id="navbarToggleExternalContent">
				<div className="bg-dark p-4">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container-fluid">
							<a className="navbar-brand" href="#">Navbar</a>
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
								</li>
								<li className="nav-item">
								<a className="nav-link" href="#">Link</a>
								</li>
								<li className="nav-item">
								<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
								</li>
							</ul>
							<form className="d-flex">
								<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</>
    )
}